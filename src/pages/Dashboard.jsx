import React, { useState, useCallback } from 'react';
import { useAuth } from '../components/Auth/AuthContext';
import { Navigate } from 'react-router-dom';
import DashboardHeader from '../components/Dashboard/Header/DashboardHeader';
import MentionsCard from '../components/Dashboard/Cards/MentionsCard';
import MentionsBarChart from '../components/Dashboard/Charts/MentionsBarChart';
import MentionsLineChart from '../components/Dashboard/Charts/MentionsLineChart';
import SentimentOverview from '../components/Dashboard/Overview/SentimentOverview';
import LatestMentions from '../components/Dashboard/Mentions/LatestMentions';
import FloatingChat from '../components/Dashboard/FloatingChat';

const Dashboard = () => {
  const { user } = useAuth();
  const [barChartKey, setBarChartKey] = useState(0);
  const [lineChartKey, setLineChartKey] = useState(0);

  const handleBarChartRefresh = useCallback(() => {
    setBarChartKey(prev => prev + 1);
  }, []);

  const handleLineChartRefresh = useCallback(() => {
    setLineChartKey(prev => prev + 1);
  }, []);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Mentions Overview</h1>
          <p className="text-gray-600 mt-1">Track and analyze your social mentions across platforms</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MentionsCard 
            title="Source of Mentions" 
            onRefresh={handleBarChartRefresh}
          >
            <div className="h-[250px] p-4">
              <MentionsBarChart key={barChartKey} />
            </div>
          </MentionsCard>

          <MentionsCard 
            title="Mentions Evolution"
            onRefresh={handleLineChartRefresh}
          >
            <div className="h-[250px] p-4">
              <MentionsLineChart key={lineChartKey} />
            </div>
          </MentionsCard>
        </div>

        <SentimentOverview />
        <LatestMentions />
      </main>

      <FloatingChat />
    </div>
  );
};

export default Dashboard;