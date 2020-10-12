<template>
  <div>
    <h1>vxe表格</h1>
    <vxe-table border round 
        stripe
        highlight-hover-row 
        highlight-current-row
        max-height="60%"
        align="center"
        empty-text="没有更多数据了！"
        :data="tableData" 
    >
      <!-- <vxe-table-column type="seq" title="Number" :title-help="{message: '自定义帮助提示信息'}" width="80"></vxe-table-column> -->
      <vxe-table-column field="equip_name" title="设备名称" sortable></vxe-table-column>
      <vxe-table-column field="equip_position" title="设备位置" sortable></vxe-table-column>
      <vxe-table-column field="openClose" title="井盖状态"></vxe-table-column>
      <vxe-table-column field="battery_level_event" title="是否在线"></vxe-table-column>
      <vxe-table-column field="lastTime" title="通信时间"></vxe-table-column>
    </vxe-table>
  </div>
</template>

<script>
export default {
  name: "MyTable",
  data() {
    return {
      tablePage: {
        currentPage: 1,
        pageSize: 15,
        totalResult: 0
      },
      tableData: [
        {
          equip_name: "26号井盖",
          equip_position: "架设点3架设点3架设点3架设点3架设点3",
          equip_out_code: "0101010F01071A01",
          openClose: "正常",
          status: "在线",
          battery_level_event: "正常",
          lastTime: "09-21 12:42:51"
        },
        {
          equip_name: "5号井盖",
          equip_position: "架设点1",
          equip_out_code: "0101010D01070501",
          openClose: "正常",
          status: "在线",
          battery_level_event: "正常",
          lastTime: "09-21 12:33:17"
        },
        {
          equip_name: "5号井盖",
          equip_position: "架设点1",
          equip_out_code: "0101010D01070501",
          openClose: "正常",
          status: "在线",
          battery_level_event: "正常",
          lastTime: "09-21 12:33:14"
        },
        {
          equip_name: "25号井盖",
          equip_position: "架设点3",
          equip_out_code: "0101010F01071901",
          openClose: "正常",
          status: "在线",
          battery_level_event: "正常",
          lastTime: "09-21 11:51:21"
        },
        {
          equip_name: "25号井盖",
          equip_position: "架设点3",
          equip_out_code: "0101010F01071901",
          openClose: "正常",
          status: "在线",
          battery_level_event: "正常",
          lastTime: "09-21 11:51:19"
        },
        {
          equip_name: "1号井盖",
          equip_position: "架设点1",
          equip_out_code: "0101010D01070101",
          openClose: "正常",
          status: "在线",
          battery_level_event: "正常",
          lastTime: "09-21 11:22:16"
        },
        {
          equip_name: "17号井盖",
          equip_position: "架设点2",
          equip_out_code: "0101010E01071101",
          openClose: "正常",
          status: "在线",
          battery_level_event: "正常",
          lastTime: "09-21 11:21:57"
        },
        {
          equip_name: "17号井盖",
          equip_position: "架设点2",
          equip_out_code: "0101010E01071101",
          openClose: "正常",
          status: "在线",
          battery_level_event: "正常",
          lastTime: "09-21 11:21:55"
        },
        {
          equip_name: "4号井盖",
          equip_position: "架设点1",
          equip_out_code: "0101010D01070401",
          openClose: "正常",
          status: "在线",
          battery_level_event: "正常",
          lastTime: "09-21 11:13:06"
        },
        {
          equip_name: "26号井盖",
          equip_position: "架设点3",
          equip_out_code: "0101010F01071A01",
          openClose: "正常",
          status: "在线",
          battery_level_event: "正常",
          lastTime: "09-21 10:53:06"
        },
        {
          equip_name: "25号井盖",
          equip_position: "架设点3",
          equip_out_code: "0101010F01071901",
          openClose: "正常",
          status: "在线",
          battery_level_event: "正常",
          lastTime: "09-21 10:01:43"
        },
        {
          equip_name: "25号井盖",
          equip_position: "架设点3",
          equip_out_code: "0101010F01071901",
          openClose: "正常",
          status: "在线",
          battery_level_event: "正常",
          lastTime: "09-21 10:01:25"
        },
        {
          equip_name: "1号井盖",
          equip_position: "架设点1",
          equip_out_code: "0101010D01070101",
          openClose: "正常",
          status: "在线",
          battery_level_event: "正常",
          lastTime: "09-21 09:31:36"
        },
        {
          equip_name: "1号井盖",
          equip_position: "架设点1",
          equip_out_code: "0101010D01070101",
          openClose: "正常",
          status: "在线",
          battery_level_event: "正常",
          lastTime: "09-21 09:31:34"
        },
        {
          equip_name: "17号井盖",
          equip_position: "架设点2",
          equip_out_code: "0101010E01071101",
          openClose: "正常",
          status: "在线",
          battery_level_event: "正常",
          lastTime: "09-21 09:31:12"
        },
        {
          equip_name: "17号井盖",
          equip_position: "架设点2",
          equip_out_code: "0101010E01071101",
          openClose: "正常",
          status: "在线",
          battery_level_event: "正常",
          lastTime: "09-21 09:31:10"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
// .vxe-table .vxe-body--row.row--stripe{
//     background-color: red !important;
// }
</style>