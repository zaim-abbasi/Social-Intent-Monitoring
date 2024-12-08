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
import { motion } from 'framer-motion';
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

const MentionsBarChart = () => {
  const { user } = useAuth();

  const getUserPlatformData = () => {
    const labels = [];
    const data = [];
    const backgroundColor = [];
    const hoverBackgroundColor = [];

    user?.platforms?.forEach(platform => {
      const platformInfo = platformConfig[platform.name.toLowerCase()];
      if (platformInfo) {
        labels.push(platformInfo.name);
        // Mock data - in production, this would come from your API
        data.push(Math.floor(Math.random() * 100) + 50);
        backgroundColor.push(platformInfo.color.bar);
        hoverBackgroundColor.push(platformInfo.color.barHover);
      }
    });

    // Calculate bar thickness based on number of platforms
    const barThickness = Math.max(40 - (labels.length * 4), 20); // Decrease width as platforms increase

    return { labels, data, backgroundColor, hoverBackgroundColor, barThickness };
  };

  const { labels, data, backgroundColor, hoverBackgroundColor, barThickness } = getUserPlatformData();

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#1F2937',
        bodyColor: '#4B5563',
        padding: 12,
        bodyFont: {
          family: "'Plus Jakarta Sans', sans-serif",
          size: 14
        },
        titleFont: {
          family: "'Plus Jakarta Sans', sans-serif",
          size: 14,
          weight: '600'
        },
        borderColor: '#E5E7EB',
        borderWidth: 1,
        displayColors: true,
        boxWidth: 10,
        boxHeight: 10,
        usePointStyle: true,
        callbacks: {
          label: (context) => `${context.parsed.y} mentions`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: 'rgba(243, 244, 246, 0.6)',
          drawBorder: false,
        },
        ticks: {
          font: {
            family: "'Plus Jakarta Sans', sans-serif",
            size: 12
          },
          color: '#6B7280',
          padding: 8
        },
        border: {
          display: false
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            family: "'Plus Jakarta Sans', sans-serif",
            size: 12,
            weight: '500'
          },
          color: '#374151',
          padding: 8
        },
        border: {
          display: false
        }
      }
    },
    layout: {
      padding: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20
      }
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
        barThickness,
        hoverBackgroundColor
      }
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full h-[250px]"
    >
      <Bar options={options} data={chartData} />
    </motion.div>
  );
};

export default MentionsBarChart;