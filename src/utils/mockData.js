import { format, subDays } from 'date-fns';

// Mock data for each platform
export const platformData = {
  twitter: {
    name: 'Twitter',
    color: {
      line: 'rgb(99, 102, 241)',
      fill: 'rgba(99, 102, 241, 0.1)',
      bar: 'rgba(99, 102, 241, 0.9)',
      barHover: 'rgba(99, 102, 241, 1)'
    },
    mentionCount: 156
  },
  linkedin: {
    name: 'LinkedIn',
    color: {
      line: 'rgb(79, 70, 229)',
      fill: 'rgba(79, 70, 229, 0.1)',
      bar: 'rgba(79, 70, 229, 0.9)',
      barHover: 'rgba(79, 70, 229, 1)'
    },
    mentionCount: 134
  },
  reddit: {
    name: 'Reddit',
    color: {
      line: 'rgb(236, 72, 153)',
      fill: 'rgba(236, 72, 153, 0.1)',
      bar: 'rgba(236, 72, 153, 0.9)',
      barHover: 'rgba(236, 72, 153, 1)'
    },
    mentionCount: 89
  }
};

export const generateTimelineData = (platforms, days = 7) => {
  return platforms.map(platform => {
    const baseValue = platformData[platform.name.toLowerCase()]?.mentionCount || 50;
    const data = Array.from({ length: days }, () => 
      Math.floor((baseValue * 0.7) + Math.random() * (baseValue * 0.6))
    );
    
    const color = platformData[platform.name.toLowerCase()]?.color || {
      line: 'rgb(99, 102, 241)',
      fill: 'rgba(99, 102, 241, 0.1)'
    };

    return {
      label: platformData[platform.name.toLowerCase()]?.name || platform.name,
      data,
      borderColor: color.line,
      backgroundColor: color.fill,
      fill: true,
      tension: 0.4,
      borderWidth: 3,
      pointRadius: 4,
      pointHoverRadius: 6,
      pointBackgroundColor: 'white',
      pointBorderColor: color.line,
      pointBorderWidth: 2,
      pointHoverBorderWidth: 3,
      pointHoverBackgroundColor: 'white'
    };
  });
};

export const generateDateLabels = (days = 7) => {
  return Array.from({ length: days }).map((_, i) => 
    format(subDays(new Date(), days - 1 - i), 'MMM dd')
  );
};