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
import { usePlatformStats } from '../../../hooks/mentions/usePlatformStats';
import { LoadingSpinner } from '../../ui/LoadingSpinner';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MentionsBarChart = () => {
  const { stats, loading } = usePlatformStats();

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

  const chartData = {
    labels: stats.labels,
    datasets: [
      {
        data: stats.data,
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

  if (loading) {
    return <LoadingSpinner />;
  }

  return <Bar options={options} data={chartData} />;
};

export default MentionsBarChart;