import React from "react";
import ReactECharts from "echarts-for-react";
import theme from "../../theme";
import faker from "faker";

export const PullRequestTimeline: React.FC = () => {
  const options = {
    xAxis: {
      type: "category",
      boundaryGap: true,
    },
    yAxis: {
      type: "value",
    },
    tooltip: {
      trigger: "axis",
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ["line", "bar"] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    legend: {
      top: 0,
      data: ["intecrb/sample_app"],
    },
    dataZoom: [
      {
        type: "inside",
      },
    ],
    series: [
      {
        name: "intecrb/sample_app",
        type: "bar",
        itemStyle: {
          color: theme.palette.primary.light,
          width: 1,
        },
        markPoint: {
          data: [
            { type: "max", name: "最大值" },
            { type: "min", name: "最小值" },
          ],
        },
        markLine: {
          data: [{ type: "average", name: "平均值" }],
        },
        data: [
          ["2019-10-10", faker.random.number(10)],
          ["2019-10-11", faker.random.number(10)],
          ["2019-10-12", faker.random.number(10)],
          ["2019-10-13", faker.random.number(10)],
          ["2019-10-14", faker.random.number(10)],
          ["2019-10-15", faker.random.number(10)],
          ["2019-10-16", faker.random.number(10)],
          ["2019-10-17", faker.random.number(10)],
          ["2019-10-18", faker.random.number(10)],
          ["2019-10-19", faker.random.number(10)],
          ["2019-10-20", faker.random.number(10)],
          ["2019-10-21", faker.random.number(10)],
          ["2019-10-22", faker.random.number(10)],
          ["2019-10-23", faker.random.number(10)],
          ["2019-10-24", faker.random.number(10)],
          ["2019-10-25", faker.random.number(10)],
        ],
      },
    ],
  };

  return <ReactECharts option={options} />;
};
