<template>
  <div>
      <div class="map" ref="myEchart"></div>
  </div>
</template>
<script>
  import echarts from "echarts";
  //   import '../../node_modules/echarts/map/js/world.js'
  import '../../node_modules/echarts/map/js/china.js' // 引入中国地图数据
  export default {
    name: 'Project',
    props: ["userJson"],
    components: {
    },
    data() {
      return {
        chart: null
      };
    },
    mounted() {
      this.setmap();
    },
    beforeDestroy() {
      if (!this.chart) {
        return;
      }
      this.chart.dispose();
      this.chart = null;
    },
    methods: {
      setmap() {
        let geoCoordMap = { // 地图地点的经度纬度
          '上海': [121.4648, 31.2891],
          '东莞': [113.8953, 22.901],
          '东营': [118.7073, 37.5513],
          '中山': [113.4229, 22.478],
          '临汾': [111.4783, 36.1615],
          '临沂': [118.3118, 35.2936],
          '丹东': [124.541, 40.4242],
          '丽水': [119.5642, 28.1854],
          '乌鲁木齐': [87.9236, 43.5883],
          '佛山': [112.8955, 23.1097],
          '保定': [115.0488, 39.0948],
          '兰州': [103.5901, 36.3043],
          '包头': [110.3467, 41.4899],
          '北京': [116.4551, 40.2539],
          '北海': [109.314, 21.6211],
          '南京': [118.8062, 31.9208],
          '南宁': [108.479, 23.1152],
          '南昌': [116.0046, 28.6633],
          '南通': [121.1023, 32.1625],
          '厦门': [118.1689, 24.6478],
          '台州': [121.1353, 28.6688],
          '合肥': [117.29, 32.0581],
          '呼和浩特': [111.4124, 41.11],
          '咸阳': [108.4131, 34.8706],
          '哈尔滨': [127.9688, 45.368],
          '唐山': [118.4766, 39.6826],
          '嘉兴': [120.9155, 30.6354],
          '大同': [113.7854, 39.8035],
          '大连': [122.2229, 39.4409],
          '天津': [117.4219, 39.4189],
          '太原': [112.3352, 37.9413],
          '威海': [121.9482, 37.1393],
          '宁波': [121.5967, 29.6466],
          '宝鸡': [107.1826, 34.3433],
          '宿迁': [118.5535, 33.7775],
          '常州': [119.4543, 31.5582],
          '广州': [113.5107, 23.2196],
          '廊坊': [116.521, 39.0509],
          '延安': [109.1052, 36.4252],
          '张家口': [115.1477, 40.8527],
          '徐州': [117.5208, 34.3268],
          '德州': [116.6858, 37.2107],
          '惠州': [114.6204, 23.1647],
          '成都': [103.9526, 30.7617],
          '扬州': [119.4653, 32.8162],
          '承德': [117.5757, 41.4075],
          '拉萨': [91.1865, 30.1465],
          '无锡': [120.3442, 31.5527],
          '日照': [119.2786, 35.5023],
          '昆明': [102.9199, 25.4663],
          '杭州': [119.5313, 29.8773],
          '枣庄': [117.323, 34.8926],
          '柳州': [109.3799, 24.9774],
          '株洲': [113.5327, 27.0319],
          '武汉': [114.3896, 30.6628],
          '汕头': [117.1692, 23.3405],
          '江门': [112.6318, 22.1484],
          '沈阳': [123.1238, 42.1216],
          '沧州': [116.8286, 38.2104],
          '河源': [114.917, 23.9722],
          '泉州': [118.3228, 25.1147],
          '泰安': [117.0264, 36.0516],
          '泰州': [120.0586, 32.5525],
          '济南': [117.1582, 36.8701],
          '济宁': [116.8286, 35.3375],
          '海口': [110.3893, 19.8516],
          '淄博': [118.0371, 36.6064],
          '淮安': [118.927, 33.4039],
          '深圳': [114.5435, 22.5439],
          '清远': [112.9175, 24.3292],
          '温州': [120.498, 27.8119],
          '渭南': [109.7864, 35.0299],
          '湖州': [119.8608, 30.7782],
          '湘潭': [112.5439, 27.7075],
          '滨州': [117.8174, 37.4963],
          '潍坊': [119.0918, 36.524],
          '烟台': [120.7397, 37.5128],
          '玉溪': [101.9312, 23.8898],
          '珠海': [113.7305, 22.1155],
          '盐城': [120.2234, 33.5577],
          '盘锦': [121.9482, 41.0449],
          '石家庄': [114.4995, 38.1006],
          '福州': [119.4543, 25.9222],
          '秦皇岛': [119.2126, 40.0232],
          '绍兴': [120.564, 29.7565],
          '聊城': [115.9167, 36.4032],
          '肇庆': [112.1265, 23.5822],
          '舟山': [122.2559, 30.2234],
          '苏州': [120.6519, 31.3989],
          '莱芜': [117.6526, 36.2714],
          '菏泽': [115.6201, 35.2057],
          '营口': [122.4316, 40.4297],
          '葫芦岛': [120.1575, 40.578],
          '衡水': [115.8838, 37.7161],
          '衢州': [118.6853, 28.8666],
          '西宁': [101.4038, 36.8207],
          '西安': [109.1162, 34.2004],
          '贵阳': [106.6992, 26.7682],
          '连云港': [119.1248, 34.552],
          '邢台': [114.8071, 37.2821],
          '邯郸': [114.4775, 36.535],
          '郑州': [113.4668, 34.1234],
          '郑州 ': [114.13, 34.5234],
          '鄂尔多斯': [108.9734, 39.2487],
          '重庆': [107.7539, 30.1904],
          '金华': [120.0037, 29.1028],
          '铜川': [109.0393, 35.1947],
          '银川': [106.3586, 38.1775],
          '镇江': [119.4763, 31.9702],
          '长春': [125.8154, 44.2584],
          '长沙': [113.0823, 28.2568],
          '长治': [112.8625, 36.4746],
          '阳泉': [113.4778, 38.0951],
          '青岛': [120.4651, 36.3373],
          '韶关': [113.7964, 24.7028],
          '吐鲁番': [89.18596, 42.94244],
          '那曲': [92.05136, 31.47614],
          '吕梁': [111.15081, 37.51761],
          '伊春': [128.669, 47.72582],
          '呼伦贝尔': [119.73572, 49.21336],
          '嘉峪关': [98.33435281250001, 39.668377553435185],
          '汉中': [107.03194, 33.06784],
          '太仓':[121.13055,31.457735]
        }

        // 发射点数组
        let GZData = [
          [
            [{ name: '上海'}, { name: '呼和浩特'}],
            [{ name: '上海' }, { name: '银川' }],
            [{ name: '上海' }, { name: '西安' }],
            [{ name: '上海' }, { name: '延安' }],
            [{ name: '上海' }, { name: '郑州' }],
            [{ name: '上海' }, { name: '郑州 ' }],
            [{ name: '上海' }, { name: '淮安' }],
            [{ name: '上海' }, { name: '青岛' }],
            [{ name: '上海' }, { name: '盐城' }],
            [{ name: '上海' }, { name: '太仓' }],
            [{ name: '上海' }, { name: '苏州' }],
            [{ name: '上海' }, { name: '杭州' }],
            [{ name: '上海' }, { name: '广州' }],
            [{ name: '上海' }, { name: '上海' }]
          ],
        ]

        // 发射点数组下标

        let launchIndex = 0

        // 按照数组顺序循环发射（如果是使用定时器销毁重建图形发射点那么这个就派上用场了）
        let len = GZData.length
        let arrIndex = launchIndex
        if (launchIndex < len - 1) {
          launchIndex = launchIndex + 1
        } else {
          launchIndex = 0
        }
        // 防止切换用户列表时，定时器延迟造成下标超出数组问题
        if (arrIndex > len - 1) {
          launchIndex = 0
          arrIndex = 0
        }

        // 数组遍历
        let lineDataArr = []
        lineDataArr.push(GZData[arrIndex])

        // // 自定义多个发射点（push多少个就会有多少个同时发射点）
        // lineDataArr.push(GZData[0])
        // lineDataArr.push(GZData[1])

        // 处理线路所需要的数据格式data
        let convertData = function (data) {
          // console.log(data)
          let res = []
          for (let i = 0; i < data.length; i++) {
            let dataItem = data[i]
            let fromCoord = geoCoordMap[dataItem[0].name]
            let toCoord = geoCoordMap[dataItem[1].name]
            if (fromCoord && toCoord) {
              res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord]
              })
            }
          }
          return res
        }
        // 发射点和线路颜色
        let color = ['#ffa022', '#a6c84c', '#46bee9'] // 橙 墨绿 蓝
        let seriesData = []
        lineDataArr.forEach(function (item, i) {
          seriesData.push(
            { // 亮光发射效果
              // name: item[0] + ' Top10',
              name: '上海',
              type: 'lines',
              zlevel: 10,
              effect: {
                show: true,
                period: 6, // 特效动画的时间，单位为 s
                // delay: i * 5000, // 特效动画的延时，支持设置成数字或者回调。单位ms
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
              },
              label: {
                show: true
              },
              lineStyle: {
                normal: {
                  color: color[i],
                  width: 0,
                  curveness: 0.2
                }
              },
              // data: convertData(item[1])
              data: convertData(item)
            },
            { // 线路效果
              // name: item[0] + ' Top10',
              name: '上海',
              type: 'lines',
              zlevel: 2,
              effect: {
                // show: true,
                // period: 6,
                // trailLength: 0,
                // symbol: planePath,
                // symbolSize: 55
              },
              label: {
                show: true
              },
              lineStyle: {
                normal: {
                  color: color[i],
                  width: 1.5,
                  opacity: 0.4,
                  curveness: 0.2
                }
              },
              // data: convertData(item[1])
              data: convertData(item)
            },
            { // 文字和地点涟漪效果
              // name: item[0] + ' Top10',
              name: '广州',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              // geoIndex: 0,
              zlevel: 2,
              rippleEffect: {
                brushType: 'stroke'
              },
              label: {
                emphasis: { // 有这一层为鼠标移入涟漪点才显示文字，去掉这一层那么直接显示文字再地图上
                  show: true,
                  // position: 'top',
                  formatter: '{b}'
                  // offset: [10, -4]
                },
                // normal: {
                //   show: true,
                //   position: 'right',
                //   formatter: '{b}'
                // }
              },
              symbolSize: 8,
              // symbolOffset:[4, 4], // 标记相对于原本位置的偏移
              itemStyle: { // 涟漪相关颜色
                normal: {
                  color: color[i]
                }
                // color: color[i]
              },
              data: item.map(function (dataItem) {
                return {
                  name: dataItem[1].name,
                  value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                }
              })
            }
          )
        })
        // 中国地图线路特效配置 end


        let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置    
        window.onresize = myChart.resize;
        myChart.setOption({ // 进行相关配置
          backgroundColor: 'rgba(255,255,255,0)', // 图形容器背景色
          tooltip: { // 鼠标移到图里面的浮动提示框
            // formatter详细配置： https://echarts.baidu.com/option.html#tooltip.formatter
            formatter(params, ticket, callback) {
              // console.log(params)
              let value = params.value
              if (Array.isArray(value)) { // 鼠标移到涟漪点上不显示浮层
                return ''
              }
              if (value === undefined) { // 鼠标移到路线上不显示浮层
                return ''
              }
              if (isNaN(value)) {
                value = 0
              }

        //       let htmlStr = `
        //   <div style='font-size:16px;'> ${params.name}</div>
        //   <p style='text-align:left;margin-top:4px;'>
        //     区域分布：${value}%<br/>
        //   </p>
        // `
        //       return htmlStr
            }
            // backgroundColor:"#ff7f50",//提示标签背景颜色
            // textStyle:{color:"#fff"} //提示标签字体颜色
          },
          // visualMap的详细配置解析：https://echarts.baidu.com/option.html#visualMap
          // visualMap: { // 左下角的颜色区域
          //   type: 'continuous', // 定义为分段型 visualMap
          //   min: 0,
          //   max: 100,
          //   itemWidth: 10,
          //   itemHeight: 100,
          //   // top: 20,
          //   bottom: 10,
          //   left: 20,
          //   text: ['高', '低'],
          //   textStyle: { // 文字颜色
          //     color: '#ddd'
          //   },
          //   calculable: true, // 是否显示手柄
          //   inRange: {
          //     color: ['#0c1c30', '#216bc2', '#7760f6', '#9900FF'],
          //     // symbolSize: [60, 100] // 大小（这里会影响涟漪散点图的显示，所以去掉）
          //   }
          // },
          // geo配置详解： https://echarts.baidu.com/option.html#geo
          geo: { // 地理坐标系组件用于地图的绘制
            map: 'china', // 表示中国地图
            // roam: true, // 是否开启鼠标缩放和平移漫游
            zoom: 1.2, // 当前视角的缩放比例（地图的放大比例）
            // top:20,
            label: {
              show: true,
              color: '#f2f2f2' // 文字颜色
            },
            itemStyle: { // 地图区域的多边形 图形样式。
              areaColor: '#0c1c30', // 地区默认颜色
              // borderColor: '#678dd6', //片区边框颜色
              borderWidth: 1, // 边框描绘
              borderColor: '#90c5ed', //片区边框颜色
              emphasis: { // 高亮状态下的多边形和标签样式
                areaColor: '#24cbff', // 高亮区域背景颜色
                shadowBlur: 20,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },
          series: [
            ...seriesData, // 中国地图线路特效配置
            {
              // name: '', // 浮动框的标题（上面的formatter自定义了提示框数据，所以这里可不写）
              type: 'map',
              geoIndex: 0,
              label: {
                show: true
              },
              // 这是需要配置地图上的某个地区的数据，根据后台的返回的数据进行拼接（下面是我定义的假数据）
              data: [{
                'name': '上海',
                'value': 80
              }, {
                'name': '呼和浩特',
                'value': 25
              }, {
                'name': '银川',
                'value': 10
              }, {
                'name': '西安',
                'value': 36
              }, {
                'name': '延安',
                'value': 200
              }, {
                'name': '郑州',
                'value': 60
              }]
            }
          ]
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .map {
    width: 927px;
    height: 688px;
    margin: 30px auto 0;
  }

</style>