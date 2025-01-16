import React from 'react';
import ReactECharts from 'echarts-for-react';

interface PerformanceGraphProps {
  data: any;
  title: string;
}

const PerformanceGraph: React.FC<PerformanceGraphProps> = ({ data, title }) => {
  const option = {
    title: {
      text: title,
      left: 'center',
      textStyle: {
        color: '#374151',
        fontWeight: 'normal',
      },
      top: 0,
      padding: [0, 20],
    },
    tooltip: {
      trigger: 'axis',
      formatter: '{b}: {c}',
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '10%',
      top: '15%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: data?.timestamps || [],
      boundaryGap: false,
      axisLabel: {
        interval: 'auto',
        rotate: window.innerWidth < 768 ? 45 : 0,
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}',
      },
    },
    series: [
      {
        name: title,
        type: 'line',
        data: data?.values || [],
        smooth: true,
        lineStyle: {
          color: '#3B82F6',
          width: 2,
        },
        symbol: 'circle',
        symbolSize: 6,
        itemStyle: {
          color: '#3B82F6',
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(59, 130, 246, 0.2)',
              },
              {
                offset: 1,
                color: 'rgba(59, 130, 246, 0)',
              },
            ],
          },
        },
      },
    ],
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-4">
      <ReactECharts 
        option={option} 
        style={{ height: '400px', minHeight: '300px' }}
        opts={{ renderer: 'svg' }}
      />
    </div>
  );
};

export default PerformanceGraph;