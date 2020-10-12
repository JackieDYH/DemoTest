<template>
  <div id="box">
    <h2>el-表格</h2>
    <div class="tab">
      <!-- <el-table
        :data="tableData"
        stripe
        style="width: 100%;height:58%"
        :header-cell-style="{
          color: '#fff',
          'text-align': 'center',
          padding: '.06rem 0'
        }"
        :cell-style="{
          color: '#fff',
          'text-align': 'center',
          padding: '.07rem 0'
        }"
      >
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table> -->

      <el-table
        :data="tableData1"
        stripe
        @row-click="handle"
        style="width: 100%;height:58%"
        class="table"
        :header-cell-style="{
          color: '#fff',
          'text-align': 'center',
          padding: '.06rem 0'
        }"
        :cell-style="{
          color: '#fff',
          'text-align': 'center',
          padding: '.07rem 0'
        }"
      >
        <el-table-column
          prop="equip_position"
          :label="tabName[0]"
        ></el-table-column>
        <el-table-column
          prop="status"
          :label="tabName[1]"
          width="78px"
        ></el-table-column>
        <el-table-column
          prop="equip_is_event"
          :label="tabName[2]"
          width="78px"
        ></el-table-column>
        <el-table-column
          prop="battery_level_event"
          :label="tabName[3]"
          width="78px"
        ></el-table-column>
        <el-table-column prop="lastTime" :label="tabName[4]"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabName: ["设备位置", "是否在线", "设备状态", "电池状态", "通信时间"],
      tableData1: [
        {
          equip_name: "蓄水箱阀门6号",
          equip_out_code: "31103101142012120220",
          equip_position: "123456",
          status: "在线",
          equip_is_event: "正常",
          battery_level_event: "正常",
          lastTime: "11:30:53"
        },
        {
          equip_name: "蓄水箱阀门10号",
          equip_out_code: "31103101142011120213",
          equip_position: "啊啊啊啊啊啊啊啊啊啊啊啊啊啊门",
          status: "在线",
          equip_is_event: "报警",
          battery_level_event: "正常",
          lastTime: "09月27日 11:30:48"
        },
        {
          equip_name: "蓄水箱阀门4号",
          equip_out_code: "31103101142011120120",
          equip_position: "啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
          status: "在线",
          equip_is_event: "正常",
          battery_level_event: "正常",
          lastTime: "09月27日 11:30:47"
        },
        {
          equip_name: "1号楼道占用监控",
          equip_out_code: "0101010101020001",
          equip_position: "啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
          status: "在线",
          equip_is_event: "正常",
          battery_level_event: "正常",
          lastTime: "09月27日 11:30:46"
        },
        {
          equip_name: "蓄水箱阀门8号",
          equip_out_code: "0101010C01060801",
          equip_position: "啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
          status: "在线",
          equip_is_event: "正常",
          battery_level_event: "正常",
          lastTime: "09月27日 11:30:34"
        },
        {
          equip_name: "蓄水箱阀门7号",
          equip_out_code: "0101010C01060701",
          equip_position: "啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
          status: "在线",
          equip_is_event: "正常",
          battery_level_event: "正常",
          lastTime: "09月27日 11:30:29"
        }
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods:{
    // 实现点击table某一行获取对应的code播放对应的视频 20201012
    handle(row,column,event){
      console.log(row,column,event);
      console.log(row.equip_out_code,'222')
      localStorage.setItem("code", row.equip_out_code);
      this.$bus.$emit('handleclick',row.equip_out_code)

    }
  }
};
</script>

<style lang="less">
.table{
    th{
        padding: 0 !important;
        height: 60px;
        line-height: 60px;
    }
    td{
        padding: 0 !important;
        height: 20px;
        line-height: 20px;
    }
}


/* 鼠标滑过高亮显示 */
.el-table tbody tr:hover > td {
  background-color: rgb(189, 189, 189) !important;
}

/* 表格线 */
.el-table--border,
.el-table--group {
  border-color: rgb(209, 206, 206);
}
.el-table--border:after,
.el-table--group:after,
.el-table:before {
  background-color: rgb(209, 206, 206);
}
.el-table td,
.el-table--border th,
.el-table th.is-leaf {
  border-bottom-color: rgb(209, 206, 206);
}
.el-table--border td,
.el-table--border th {
  border-right-color: rgb(209, 206, 206);
}
/*  斑马纹表格背景 */
.el-table--striped .el-table__body tr.el-table__row--striped td {
  background: rgb(228, 228, 228);
}
// 修改表格头部背景
.el-table th {
  background: #18275c;
}
// 修改表格行背景
.el-table tr {
  background: #0a327e;
}
// 修改斑马线表格的背景
.el-table--striped .el-table__body tr.el-table__row--striped td {
  background: #18275c;
}
// 修改行内线的颜色
.el-table td,
.building-top .el-table th.is-leaf {
  border-bottom: 1px solid #18275c;
}
// 修改表格最底部边框颜色和高度
.el-table::before {
  border-bottom: 1px solid #18275c;
  height: 2px;
}
// 修改表头字体颜色
.el-table thead {
  color: #fff;
  text-align: center;
  font-weight: 500;
}
// 修改表格内容字体颜色和字体大小
.el-table {
  color: #fff;
  text-align: center;
  font-size: 14px;
}
// 修改表格无数据的时候背景，字体颜色
.el-table__empty-block {
  background: #16603c;
}

.el-table__empty-text {
  color: #fff;
}
// 修改表格鼠标悬浮hover背景色
.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: pink;
}

#box {
  width: 500px;
  height: 500px;
  background-color: aqua;
  border: 1px solid #999;
}
.tab {
  width: 100%;
  height: 100%;
  background-color: aquamarine;
}
</style>