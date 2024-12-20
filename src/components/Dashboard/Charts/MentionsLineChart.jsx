import React, { useState, useCallback } from 'react';
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
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../../components/Auth/AuthContext';
import { platformConfig } from '../../../config/platformConfig';
import { format, subDays } from 'date-fns';

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
  const [key, setKey] = useState(0);

  const generateDateLabels = useCallback((days = 7) => {
    return Array.from({ length: days }).map((_, i) => 
      format(subDays(new Date(), days - 1 - i), 'MMM dd')
    );
  }, []);

  const generateTimelineData = useCallback(() => {
    return user?.platforms?.map(platform => {
      const platformInfo = platformConfig[platform.name.toLowerCase()];
      if (!platformInfo) return null;

      const baseValue = 50;
      const data = Array.from({ length: 7 }, () => 
        Math.floor((baseValue * 0.4) + Math.random() * (baseValue * 1.2))
      );

      return {
        label: platformInfo.name,
        data,
        borderColor: platformInfo.color.line,
        backgroundColor: platformInfo.color.fill,
        fill: true,
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: 'white',
        pointBorderColor: platformInfo.color.line,
        pointBorderWidth: 2,
        pointHoverBorderWidth: 3,
        pointHoverBackgroundColor: 'white'
      };
    }).filter(Boolean);
  }, [user]);

  const data = {
    labels: generateDateLabels(),
    datasets: generateTimelineData()
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
        max: 100,
        ticks: {
          stepSize: 20,
          font: {
            family: "'Plus Jakarta Sans', sans-serif",
            size: 12,
            weight: '500'
          },
          color: '#6B7280',
          padding: 8,
          callback: (value) => `${value} mentions`
        },
        grid: {
          color: 'rgba(243, 244, 246, 0.6)',
          drawBorder: false
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
        <Line options={options} data={data} />
      </motion.div>
    </AnimatePresence>
  );
};

export default MentionsLineChart;