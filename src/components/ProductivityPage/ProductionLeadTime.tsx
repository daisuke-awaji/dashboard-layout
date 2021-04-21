import React from "react";
import ReactECharts from "echarts-for-react";
import theme from "../../theme";
import faker from "faker";

type ProductionLeadTimeProps = { repository: string };
export const ProductionLeadTime: React.FC<ProductionLeadTimeProps> = ({
  repository,
}) => {
  const data = [];
  for (let i = 32; i < 87; i++) {
    data.push([i, faker.random.float({ min: 1, max: 10 })]);
  }

  const options = {
    title: {
      subtext: "Days",
    },
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
      data: [repository],
    },
    dataZoom: [
      {
        type: "inside",
      },
    ],
    series: [
      {
        name: repository,
        type: "line",
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
        data: data,
      },
    ],
  };

  return <ReactECharts option={options} />;
};
