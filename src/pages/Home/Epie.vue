<template>
  <div id="pie"></div>
</template>

<script>
//1、导入echarts
import * as echarts from "echarts";
export default {
  data() {
    return {
      options: {
        title: {
          text: "某站点用户访问来源",
          subtext: "纯属虚构",
          left: "center",
          show: true,
          textStyle: {
            color: "red",
          },
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "50%",
            data: [
              
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
    };
  },
  created() {
    let data=[
      { value: 1048, name: "搜索引擎" },
      { value: 735, name: "直接访问" },
      { value: 580, name: "邮件营销" },
      { value: 484, name: "联盟广告" },
      { value: 300, name: "视频广告" },
    ];
    this.options.series[0].data = data
  },
  mounted() {
    //2.获取dom对象
    let dom = document.getElementById("pie");
    //3.初始化
    let myEcharts = echarts.init(dom);
    //4.设置配置对象
    myEcharts.setOption(this.options);
  },
  methods: {},
  components: {},
};
</script>
<style scoped>
#pie {
  width: 600px;
  height: 400px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px #28d380;
}
</style>