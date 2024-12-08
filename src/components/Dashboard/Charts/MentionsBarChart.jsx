import React, { useState, useCallback } from 'react';
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
import { motion, AnimatePresence } from 'framer-motion';
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
  const [key, setKey] = useState(0);

  const getUserPlatformData = useCallback(() => {
    const labels = [];
    const data = [];
    const backgroundColor = [];
    const hoverBackgroundColor = [];

    user?.platforms?.forEach(platform => {
      const platformInfo = platformConfig[platform.name.toLowerCase()];
      if (platformInfo) {
        labels.push(platformInfo.name);
        data.push(Math.floor(Math.random() * 80) + 20); // Keep data between 20-100
        backgroundColor.push(platformInfo.color.bar);
        hoverBackgroundColor.push(platformInfo.color.barHover);
      }
    });

    const barThickness = Math.max(40 - (labels.length * 4), 20);

    return { labels, data, backgroundColor, hoverBackgroundColor, barThickness };
  }, [user]);

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
        max: 100,
        ticks: {
          stepSize: 20,
          font: {
            family: "'Plus Jakarta Sans', sans-serif",
            size: 12,
            weight: '500'
          },
          color: '#6B7280',
          padding: 8
        },
        grid: {
          display: true,
          color: 'rgba(243, 244, 246, 0.6)',
          drawBorder: false,
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
            weight: '600'
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
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="w-full h-[250px]"
      >
        <Bar options={options} data={chartData} />
      </motion.div>
    </AnimatePresence>
  );
};

export default MentionsBarChart;