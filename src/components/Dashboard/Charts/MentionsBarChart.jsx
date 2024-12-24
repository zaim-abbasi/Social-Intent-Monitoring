import React, { useMemo, useEffect } from 'react';
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
import { useAuth } from '../../../components/Auth/AuthContext';
import { platformConfig } from '../../../config/platformConfig';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MentionsBarChart = ({ refreshKey }) => {
  const { user } = useAuth();

  const { labels, data, backgroundColor, hoverBackgroundColor } = useMemo(() => {
    const labels = [];
    const data = [];
    const backgroundColor = [];
    const hoverBackgroundColor = [];

    user?.platforms?.forEach(platform => {
      const platformInfo = platformConfig[platform.name.toLowerCase()];
      if (platformInfo) {
        labels.push(platformInfo.name);
        data.push(Math.floor(Math.random() * 80) + 20);
        backgroundColor.push(platformInfo.color.bar);
        hoverBackgroundColor.push(platformInfo.color.barHover);
      }
    });

    return { labels, data, backgroundColor, hoverBackgroundColor };
  }, [user, refreshKey]); // Add refreshKey to dependencies

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        titleColor: '#1F2937',
        bodyColor: '#4B5563',
        padding: 12,
        bodyFont: {
          family: "'Plus Jakarta Sans', sans-serif",
          size: 13
        },
        titleFont: {
          family: "'Plus Jakarta Sans', sans-serif",
          size: 13,
          weight: '600'
        },
        borderColor: '#E5E7EB',
        borderWidth: 1,
        displayColors: true,
        boxWidth: 8,
        boxHeight: 8,
        usePointStyle: true,
        callbacks: {
          label: (context) => `${context.parsed.y} trends`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          display: true,
          color: 'rgba(243, 244, 246, 0.6)',
          drawBorder: false,
        },
        border: {
          display: false
        },
        ticks: {
          stepSize: 25,
          font: {
            family: "'Plus Jakarta Sans', sans-serif",
            size: 11,
            weight: '500'
          },
          color: '#6B7280',
          padding: 8
        }
      },
      x: {
        grid: {
          display: false
        },
        border: {
          display: false
        },
        ticks: {
          font: {
            family: "'Plus Jakarta Sans', sans-serif",
            size: 11,
            weight: '500'
          },
          color: '#374151',
          padding: 8
        }
      }
    },
    layout: {
      padding: {
        top: 8,
        bottom: 8,
        left: 8,
        right: 8
      }
    },
    animation: {
      duration: 750,
      easing: 'easeInOutQuart'
    }
  };

  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderRadius: 8,
        borderSkipped: false,
        barThickness: 24,
        maxBarThickness: 32,
        hoverBackgroundColor,
        categoryPercentage: 0.9,
        barPercentage: 1
      }
    ]
  };

  return (
    <div className="w-full h-full">
      <Bar options={options} data={chartData} />
    </div>
  );
};

export default MentionsBarChart;