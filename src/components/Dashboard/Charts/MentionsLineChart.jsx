import React, { useCallback, useMemo } from 'react';
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

const MentionsLineChart = ({ refreshKey }) => {
  const { user } = useAuth();

  const generateDateLabels = useCallback((days = 7) => {
    return Array.from({ length: days }).map((_, i) => 
      format(subDays(new Date(), days - 1 - i), 'MMM dd')
    );
  }, []);

  const { labels, datasets } = useMemo(() => {
    const datasets = user?.platforms?.map(platform => {
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
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointBackgroundColor: 'white',
        pointBorderColor: platformInfo.color.line,
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointHoverBackgroundColor: 'white',
        segment: {
          borderColor: ctx => {
            const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, ctx.chart.height);
            gradient.addColorStop(0, platformInfo.color.line);
            gradient.addColorStop(1, platformInfo.color.lineEnd || platformInfo.color.line);
            return gradient;
          }
        }
      };
    }).filter(Boolean) || [];

    return {
      labels: generateDateLabels(),
      datasets
    };
  }, [user, generateDateLabels, refreshKey]); // Add refreshKey to dependencies

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
          boxWidth: 6,
          boxHeight: 6,
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 16,
          font: {
            family: "'Plus Jakarta Sans', sans-serif",
            size: 11,
            weight: '500'
          }
        }
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
        boxWidth: 6,
        boxHeight: 6,
        usePointStyle: true,
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.parsed.y} trends`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(243, 244, 246, 0.6)',
          drawBorder: false
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

  return (
    <div className="w-full h-full">
      <Line options={options} data={{ labels, datasets }} />
    </div>
  );
};

export default MentionsLineChart;