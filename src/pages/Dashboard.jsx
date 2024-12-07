import React from 'react';
import { useAuth } from '../components/Auth/AuthContext';
import { Navigate } from 'react-router-dom';
import DashboardHeader from '../components/Dashboard/Header/DashboardHeader';
import MentionsCard from '../components/Dashboard/Cards/MentionsCard';
import MentionsBarChart from '../components/Dashboard/Charts/MentionsBarChart';
import FloatingChat from '../components/Dashboard/FloatingChat';

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Mentions</h1>
          <p className="text-gray-600 mt-1">Track and analyze your social mentions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MentionsCard title="Source of Mentions">
            <div className="h-64">
              <MentionsBarChart />
            </div>
          </MentionsCard>

          <MentionsCard
            title="Mentions Evolution"
            value="2,847"
            change={12.5}
          >
            <p className="text-gray-600">Total mentions across all platforms</p>
          </MentionsCard>
        </div>
      </main>

      <FloatingChat />
    </div>
  );
};

export default Dashboard;