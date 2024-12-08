import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import { useAuth } from '../../../components/Auth/AuthContext';
import { generateTimelineData, generateDateLabels } from '../../../utils/mockData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const MentionsLineChart = () => {
  const { user } = useAuth();

  const data = {
    labels: generateDateLabels(),
    datasets: generateTimelineData(user.platforms)
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          boxWidth: 8,
          boxHeight: 8,
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          font: {
            family: "'Plus Jakarta Sans', sans-serif",
            size: 12,
            weight: '600'
          }
        }
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
        boxWidth: 8,
        boxHeight: 8,
        usePointStyle: true,
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.parsed.y} mentions`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(243, 244, 246, 0.6)',
          drawBorder: false
        },
        ticks: {
          font: {
            family: "'Plus Jakarta Sans', sans-serif",
            size: 12
          },
          color: '#6B7280',
          padding: 8,
          callback: (value) => `${value} mentions`
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full h-[400px]"
    >
      <Line options={options} data={data} />
    </motion.div>
  );
};

export default MentionsLineChart;