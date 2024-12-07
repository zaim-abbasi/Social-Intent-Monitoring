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
import { usePlatformMentions } from '../../../hooks/usePlatformMentions';
import { FiLoader } from 'react-icons/fi';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const platformColors = {
  linkedin: 'rgba(10, 102, 194, 0.8)',
  twitter: 'rgba(29, 161, 242, 0.8)',
  reddit: 'rgba(255, 69, 0, 0.8)',
  github: 'rgba(36, 41, 46, 0.8)',
  medium: 'rgba(0, 0, 0, 0.8)'
};

const platformLabels = {
  linkedin: 'LinkedIn',
  twitter: 'Twitter',
  reddit: 'Reddit',
  github: 'GitHub',
  medium: 'Medium'
};

const MentionsBarChart = () => {
  const { mentionsData, isLoading, error } = usePlatformMentions();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.parsed.y} mentions`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          precision: 0
        }
      },
      x: {
        grid: {
          display: false,
        }
      },
    },
  };

  if (isLoading) {
    return (
      <div className="h-64 flex items-center justify-center">
        <FiLoader className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-64 flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  if (!Object.keys(mentionsData).length) {
    return (
      <div className="h-64 flex items-center justify-center text-gray-500">
        No platform data available
      </div>
    );
  }

  const data = {
    labels: Object.keys(mentionsData).map(platform => 
      platformLabels[platform] || platform.charAt(0).toUpperCase() + platform.slice(1)
    ),
    datasets: [
      {
        data: Object.values(mentionsData),
        backgroundColor: Object.keys(mentionsData).map(
          platform => platformColors[platform] || 'rgba(99, 102, 241, 0.8)'
        ),
        borderRadius: 8,
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default MentionsBarChart;