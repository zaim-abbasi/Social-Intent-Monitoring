import React, { useState, useCallback } from 'react';
import { useAuth } from '../components/Auth/AuthContext';
import { Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTrendingUp, FiBarChart2, FiActivity, FiTarget, FiZap } from 'react-icons/fi';
import DashboardHeader from '../components/Dashboard/Header/DashboardHeader';
import MentionsCard from '../components/Dashboard/Cards/MentionsCard';
import MentionsBarChart from '../components/Dashboard/Charts/MentionsBarChart';
import MentionsLineChart from '../components/Dashboard/Charts/MentionsLineChart';
import SentimentOverview from '../components/Dashboard/Overview/SentimentOverview';
import LatestMentions from '../components/Dashboard/Mentions/LatestMentions';
import FloatingChat from '../components/Dashboard/FloatingChat';
import { calculateEngagementRate, calculateTrendScore } from '../utils/analyticsUtils';

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

  const capitalizedName = user.name.charAt(0).toUpperCase() + user.name.slice(1);

  const stats = [
    { 
      icon: FiZap, 
      label: 'Social Impact', 
      value: '847',
      change: '+18%',
      color: 'from-violet-500/10 to-purple-500/10',
      textColor: 'text-violet-600'
    },
    { 
      icon: FiActivity, 
      label: 'Engagement Rate', 
      value: '68%',
      change: '+5%',
      color: 'from-emerald-500/10 to-teal-500/10',
      textColor: 'text-emerald-600'
    },
    { 
      icon: FiTarget, 
      label: 'Trend Score', 
      value: '92',
      change: '+24%',
      color: 'from-blue-500/10 to-indigo-500/10',
      textColor: 'text-blue-600'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Fixed Background Pattern */}
        <div className="fixed inset-0 opacity-40 pointer-events-none overflow-hidden">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Dashboard Content */}
        <div className="relative z-10">
          {/* Dashboard Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center space-x-2 text-sm text-black/60 mb-4">
              <FiTrendingUp className="w-4 h-4" />
              <span>Real-Time Analytics</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between">
              <div>
                <h1 className="text-4xl font-display font-bold text-black mb-3">
                  Welcome back, {capitalizedName}! 👋
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl">
                  Your social trends are performing well today. Monitor your metrics and discover new opportunities.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 text-sm font-medium">
                  <FiTrendingUp className="w-4 h-4 mr-2" />
                  Trending Upward
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-black/5 hover:border-black/10 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} transform group-hover:scale-110 transition-all duration-300`}>
                    <stat.icon className="w-6 h-6 text-black" />
                  </div>
                  <span className={`text-sm font-medium ${
                    stat.change.startsWith('+') ? stat.textColor : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-black mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Analytics Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <MentionsCard 
                title="Source of Trend" 
                onRefresh={handleBarChartRefresh}
              >
                <div className="h-[200px] p-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={barChartKey}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="h-full"
                    >
                      <MentionsBarChart refreshKey={barChartKey} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </MentionsCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <MentionsCard 
                title="Trend Evolution"
                onRefresh={handleLineChartRefresh}
              >
                <div className="h-[200px] p-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={lineChartKey}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="h-full"
                    >
                      <MentionsLineChart refreshKey={lineChartKey} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </MentionsCard>
            </motion.div>
          </div>

          {/* Scrollable Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <SentimentOverview />
            <LatestMentions />
          </motion.div>
        </div>
      </main>

      <FloatingChat />
    </div>
  );
};

export default Dashboard;