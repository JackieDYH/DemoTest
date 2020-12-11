<template>
  <div>
    <div id="c1"></div>
    <div id="c2"></div>
  </div>
</template>

<script>
// 按需引入
import { Chart } from "@antv/g2";

export default {
  mounted() {
    this.initComponent();
    this.initLineChart();
  },
  data() {
    return {
      msg: "",
      chart: null,
      data: [
        { genre: "Sports", sold: 275 },
        { genre: "Strategy", sold: 115 },
        { genre: "Action", sold: 120 },
        { genre: "Shooter", sold: 350 },
        { genre: "Other", sold: 150 },
      ],
      year: [
        { year: "1991", value: 3 },
        { year: "1992", value: 4 },
        { year: "1993", value: 3.5 },
        { year: "1994", value: 5 },
        { year: "1995", value: 4.9 },
        { year: "1996", value: 6 },
        { year: "1997", value: 7 },
        { year: "1998", value: 9 },
        { year: "1999", value: 13 },
      ],
    };
  },
  methods: {
    initLineChart() {
      const chart = new Chart({
        container: "c2",
        autoFit: true,
        height: 500,
      });
      chart.data(this.year);
      chart.scale({
        year: {
          range: [0, 1],
        },
        value: {
          min: 0,
          nice: true,
        },
      });
      chart.tooltip({
        showCrosshairs: true, // 展示 Tooltip 辅助线
        shared: true,
      });
      chart.line().position("year*value").label("value");
      chart.point().position("year*value");
      chart.render();
    },

    initComponent() {
      const chart = new this.$G2.Chart({
        container: "c1",
        width: 600,
        height: 300,
      });
      chart.source(this.data);
      chart.interval().position("genre*sold").color("genre");
      this.chart = chart;
      this.chart.render();
    },
  },
};
</script>