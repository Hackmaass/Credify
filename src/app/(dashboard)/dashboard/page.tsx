"use client";

import React from "react";
import { 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  Award,
  Zap,
  Target,
  ShieldCheck,
  ExternalLink,
  ChevronRight,
  BrainCircuit,
  Activity,
  Calendar
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StatsCard } from "@/components/dashboard/stats-card";
import { AnalyticsChart } from "@/components/dashboard/analytics-chart";
import { RecentSessions } from "@/components/dashboard/recent-sessions";
import { CategoryAnalytics } from "@/components/dashboard/category-analytics";
import { motion } from "framer-motion";

export default function DashboardPage() {
  return (
    <div className="space-y-8 pb-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            Dashboard
            <Badge variant="outline" className="text-[10px] uppercase tracking-widest bg-blue-500/10 text-blue-400 border-blue-500/20 px-2 py-0">
              Live
            </Badge>
          </h1>
          <p className="text-muted-foreground">
            Monitor your educational proof-of-work and credibility metrics.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Last Sync</p>
            <p className="text-sm font-medium text-white">2 mins ago</p>
          </div>
          <Button variant="outline" className="border-white/5 bg-white/5 hover:bg-white/10 text-white h-10">
            <Activity className="w-4 h-4 mr-2 text-blue-400" />
            Refresh Data
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard 
          title="Credify Score" 
          value="842" 
          icon={ShieldCheck} 
          trend={{ value: "24", isPositive: true }}
          description="points this week"
          delay={0.1}
        />
        <StatsCard 
          title="Verified Hours" 
          value="128.5" 
          icon={Clock} 
          trend={{ value: "12%", isPositive: true }}
          description="from last month"
          delay={0.2}
        />
        <StatsCard 
          title="Learning Streak" 
          value="12 Days" 
          icon={TrendingUp} 
          trend={{ value: "Top 5%", isPositive: true }}
          description="of all learners"
          delay={0.3}
        />
        <StatsCard 
          title="Focus Score" 
          value="94%" 
          icon={BrainCircuit} 
          trend={{ value: "2%", isPositive: true }}
          description="average engagement"
          delay={0.4}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Main Analytics Chart */}
        <div className="lg:col-span-8">
          <AnalyticsChart />
        </div>

        {/* Status & Eligibility Cards */}
        <div className="lg:col-span-4 space-y-6">
          {/* Extension Status */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="border-white/5 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-xl border-blue-500/20 group">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/20">Active</Badge>
                </div>
                <CardTitle className="text-white text-lg">Extension Connected</CardTitle>
                <CardDescription className="text-blue-100/60">
                  Your browser extension is currently verifying your YouTube learning sessions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-blue-100/40">Current Session</span>
                    <span className="text-blue-200 font-medium italic">Advanced React Design...</span>
                  </div>
                  <Button className="w-full bg-white text-blue-900 hover:bg-blue-50 font-semibold group-hover:scale-[1.02] transition-transform">
                    View Extension Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Verification Eligibility */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="border-white/5 bg-white/[0.02] backdrop-blur-xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-base flex items-center gap-2">
                  <Target className="w-4 h-4 text-purple-400" />
                  Next Certificate
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Mastery in TypeScript</span>
                    <span className="text-white font-medium">85%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 1, delay: 1 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" 
                    />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Complete <span className="text-white font-medium">3 more hours</span> of verified TypeScript content to mint your next certificate.
                </p>
                <Button variant="outline" className="w-full border-white/10 bg-white/5 hover:bg-white/10 text-white text-xs h-9">
                  Explore Content
                  <ChevronRight className="w-3 h-3 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Category Analytics */}
        <CategoryAnalytics />

        {/* Recent Sessions */}
        <RecentSessions />
      </div>

      {/* Summary Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="grid gap-4 md:grid-cols-3"
      >
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex items-center gap-4">
          <div className="p-3 bg-amber-500/10 rounded-xl">
            <Calendar className="w-5 h-5 text-amber-500" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Watch Consistency</p>
            <p className="text-lg font-bold text-white">92% <span className="text-[10px] text-emerald-400 font-normal ml-1">Excellent</span></p>
          </div>
        </div>
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex items-center gap-4">
          <div className="p-3 bg-purple-500/10 rounded-xl">
            <Activity className="w-5 h-5 text-purple-500" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Active Sessions</p>
            <p className="text-lg font-bold text-white">4 <span className="text-[10px] text-muted-foreground font-normal ml-1">Today</span></p>
          </div>
        </div>
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex items-center gap-4">
          <div className="p-3 bg-blue-500/10 rounded-xl">
            <Award className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Total Certificates</p>
            <p className="text-lg font-bold text-white">14 <span className="text-[10px] text-blue-400 font-normal ml-1">+2 Pending</span></p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
