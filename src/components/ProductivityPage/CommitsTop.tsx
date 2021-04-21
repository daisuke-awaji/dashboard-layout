import React from "react";
import ReactECharts from "echarts-for-react";
import faker from "faker";

export const CommitsTop: React.FC = () => {
  const options = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // Use axis to trigger tooltip
        type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
      },
    },
    legend: {
      data: ["Commits", "PullRequests", "Issues", "Comments"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
    },
    yAxis: {
      type: "category",
      data: ["John", "Sum", "hummy", "jaggy", "Bob", "Smap", "AABB", "Green"],
    },
    toolbox: {
      show: true,
      feature: {
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    series: [
      {
        name: "Commits",
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [
          faker.random.number(10),
          faker.random.number(10),
          faker.random.number(10),
          faker.random.number(10),
          faker.random.number(10),
          faker.random.number(10),
          faker.random.number(10),
          faker.random.number(10),
        ],
      },
      {
        name: "PullRequests",
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [
          faker.random.number(10),
          faker.random.number(10),
          faker.random.number(10),
          faker.random.number(10),
          faker.random.number(10),
          faker.random.number(10),
          faker.random.number(10),
          faker.random.number(10),
        ],
      },
      {
        name: "Issues",
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [
          faker.random.number(10),
          faker.random.number(10),
          faker.random.number(10),
          faker.random.number(10),
          faker.random.number(10),
          faker.random.number(10),
          faker.random.number(10),
          faker.random.number(10),
        ],
      },
      {
        name: "Comments",
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [
          faker.random.number(10),
          faker.random.number(10),
          faker.random.number(10),
          faker.random.number(10),
          faker.random.number(10),
          faker.random.number(10),
          faker.random.number(10),
          faker.random.number(10),
        ],
      },
    ],
  };

  return <ReactECharts option={options} />;
};
