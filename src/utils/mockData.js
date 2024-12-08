import { format, subDays } from 'date-fns';
import { platformConfig } from '../config/platformConfig';

export const generateTimelineData = (platforms, days = 7) => {
  return platforms.map(platform => {
    const platformInfo = platformConfig[platform.name.toLowerCase()];
    if (!platformInfo) return null;

    const baseValue = 50;
    const data = Array.from({ length: days }, () => 
      Math.floor((baseValue * 0.7) + Math.random() * (baseValue * 0.6))
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
};

export const generateDateLabels = (days = 7) => {
  return Array.from({ length: days }).map((_, i) => 
    format(subDays(new Date(), days - 1 - i), 'MMM dd')
  );
};