import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MentionsBarChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const data = {
    labels: ['Twitter', 'LinkedIn', 'Reddit', 'News', 'Blogs'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56],
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)',
          'rgba(79, 70, 229, 0.8)',
          'rgba(236, 72, 153, 0.8)',
          'rgba(99, 102, 241, 0.8)',
          'rgba(79, 70, 229, 0.8)',
        ],
        borderRadius: 8,
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default MentionsBarChart;