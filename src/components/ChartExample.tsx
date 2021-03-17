import React from "react";
import ReactECharts from "echarts-for-react";
import theme from "../theme";
const Page: React.FC = () => {
  const options = {
    title: {
      text: "APIの実行回数",
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "30%"],
    },
    tooltip: {
      trigger: "axis",
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    legend: {
      data: ["邮件营销"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },

    series: [
      {
        name: "123abc",
        stack: "B",
        type: "line",
        symbol: "triangle",
        itemStyle: {
          color: theme.palette.primary.light,
          width: 1,
        },
        areaStyle: {},
        data: [
          ["2019-10-10", 200],
          ["2019-10-11", 560],
          ["2019-10-12", 750],
          ["2019-10-13", 580],
          ["2019-10-14", 250],
          ["2019-10-15", 300],
          ["2019-10-16", 450],
          ["2019-10-17", 300],
          ["2019-10-18", 100],
        ],
      },
    ],
  };
  return <ReactECharts option={options} />;
};
export default Page;
