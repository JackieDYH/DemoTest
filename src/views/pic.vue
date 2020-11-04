// 环状图
<template>
  <div class="box">
    <div id="cate" ref="cate"></div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      data: [
        { value: 300, name: "公共区域设备" },
        { value: 350, name: "消防设备" },
        { value: 250, name: "出入口设备" },
        { value: 100, name: "防洪防漏设备" }
      ]
    };
  },
  mounted() {
    this.setCate(this.data);
  },
  methods: {
    setCate(data) {
      let myChart  = this.$echarts.init(this.$refs.cate);
      let dataName = [];
      let total = 0;
      this.data.forEach(res => {
        dataName.push(res.name);
        total += parseFloat(res.value) * 10000;
      });
      total = total / 10000;
      let option = {
        title: {
          zlevel: 0,
          text: ["{value|" + total + "}", "{name|总设备}"].join("\n"),
          rich: {
            value: {
              color: "#999",
              fontSize: 24,
              fontWeight: "bold",
              lineHeight: 24
            },
            name: {
              color: "#999",
              lineHeight: 24
            }
          },
          top: "center",
          left: "195",
          textAlign: "center",
          textStyle: {
            rich: {
              value: {
                color: "#999",
                fontSize: 24,
                fontWeight: "bold",
                lineHeight: 24
              },
              name: {
                color: "#999",
                lineHeight: 24
              }
            }
          }
        },
        tooltip: {
          // 悬停指示
          trigger: "item",
          formatter: "{b}: {c} ({d}%)"
        },
        // legend: {
        //   orient: "vertical",
        //   x: "right",
        //   data: dataName,
        //   itemGap: 30,
        //   top: "middle",
        //   align: "left",
        //   icon: "circle",
        //   formatter: function(name) {
        //     return name;
        //   }
        // },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["55%", "80%"],
            center: ["50%", "50%"],
            stillShowZeroSum: false,
            avoidLabelOverlap: false,
            zlevel: 1,
            label: {
              normal: {
                padding: [16,16,16,16],
                backgroundColor: "#fff",
                show: false,
                position: "center",
                formatter: ["{value|{c}}", "{name|{b}}"].join("\n"),
                rich: {
                  value: {
                    color: "#999",
                    fontSize: 24,
                    fontWeight: "bold",
                    lineHeight: 24
                  },
                  name: {
                    color: "#999",
                    lineHeight: 24
                  }
                }
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "18",
                  fontWeight: "bold"
                }
              }
            },
            data
          }
        ],
        color: ["#410ADF", "#F42850", "#F6A93B", "#7ED321", "#282828"]
      };
      myChart .setOption(option);
    }
  }
};
</script>
 
<style scoped>
#cate {
  width: 400px;
  height: 400px;
}
</style>