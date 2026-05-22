"use client";

import React from "react";
import { 
  TrendingUp, 
  Clock, 
  Award,
  Zap,
  Target,
  ShieldCheck,
  ChevronRight,
  BrainCircuit,
  Activity,
  Calendar,
  Loader2,
  ExternalLink,
  AlertCircle
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
import { cn } from "@/lib/utils";
import { StatsCard } from "@/components/dashboard/stats-card";
import { AnalyticsChart } from "@/components/dashboard/analytics-chart";
import { RecentSessions } from "@/components/dashboard/recent-sessions";
import { CategoryAnalytics } from "@/components/dashboard/category-analytics";
import { useExtension } from "@/hooks/use-extension";
import { motion, AnimatePresence } from "framer-motion";

export default function DashboardPage() {
  const { 
    isExtensionInstalled, 
    activeSession, 
    stats, 
    mintStatus,
    requestMint 
  } = useExtension();

  const handleMintClick = () => {
    requestMint("CRED-782-X92"); // Request gasless mint for the next eligible TS asset
  };

  return (
    <div className="space-y-12 pb-24 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <Badge variant="outline" className="text-[10px] font-black uppercase tracking-[0.3em] bg-white/[0.03] text-white/40 border-white/5 px-3 py-1 rounded-full">
              Protocol v1.0
            </Badge>
            <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500">
              <div className={cn(
                "w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]",
                isExtensionInstalled ? "animate-pulse" : "opacity-30"
              )} />
              {isExtensionInstalled ? "Live Network Connected" : "Searching for Node..."}
            </div>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none">
            OVERVIEW
          </h1>
          <p className="text-xl text-white/40 font-medium max-w-2xl">
            Monitor your educational proof-of-work and decentralized merit metrics.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block space-y-1">
            <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-black">Last Sync</p>
            <p className="text-sm font-bold text-white tracking-tight">
              {isExtensionInstalled ? "SYNCED REAL-TIME" : "STANDBY"}
            </p>
          </div>
          <Button variant="outline" className="premium-glass border-white/5 hover:bg-white/[0.05] text-white h-14 px-8 rounded-full text-xs font-black uppercase tracking-widest">
            <Activity className="w-4 h-4 mr-3 text-white/40 animate-pulse" />
            REFRESH DATA
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 pt-4">
        <StatsCard 
          title="Credify Score" 
          value={stats.score.toString()} 
          icon={ShieldCheck} 
          trend={{ value: "24", isPositive: true }}
          description="pts this week"
          delay={0.1}
        />
        <StatsCard 
          title="Verified Hours" 
          value={stats.verifiedHours.toString()} 
          icon={Clock} 
          trend={{ value: "12%", isPositive: true }}
          description="vs last month"
          delay={0.2}
        />
        <StatsCard 
          title="Learning Streak" 
          value={`${stats.learningStreak} DAYS`} 
          icon={TrendingUp} 
          trend={{ value: "Top 5%", isPositive: true }}
          description="global rank"
          delay={0.3}
        />
        <StatsCard 
          title="Focus Score" 
          value={`${stats.focusScore}%`} 
          icon={BrainCircuit} 
          trend={{ value: "2%", isPositive: true }}
          description="avg engagement"
          delay={0.4}
        />
      </div>

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Main Analytics Chart */}
        <div className="lg:col-span-8">
          <AnalyticsChart />
        </div>

        {/* Status & Eligibility Cards */}
        <div className="lg:col-span-4 space-y-8">
          {/* Extension Status */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card className="premium-glass border-white/[0.03] overflow-hidden group relative">
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <CardHeader className="pb-6 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-white text-black rounded-2xl flex items-center justify-center shadow-2xl">
                    <Zap className="w-7 h-7" />
                  </div>
                  {isExtensionInstalled ? (
                    activeSession.isTracking ? (
                      <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full animate-pulse">
                        TRACKING ACTIVE
                      </Badge>
                    ) : (
                      <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full">
                        STANDBY
                      </Badge>
                    )
                  ) : (
                    <Badge className="bg-rose-500/10 text-rose-400 border-rose-500/20 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full">
                      DISCONNECTED
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-2xl font-black text-white tracking-tight">
                  {isExtensionInstalled ? "NODE LIVE" : "INSTALL EXTENSION"}
                </CardTitle>
                <CardDescription className="text-white/40 text-sm font-medium leading-relaxed pt-2">
                  {isExtensionInstalled 
                    ? "The tracking engine is verified and waiting for learning session activity."
                    : "Install the Credify Chrome Extension to sync your learning session details in real-time."
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-[0.2em] text-white/20">
                    <span>CURRENT SESSION</span>
                    <span className="text-white tracking-tight italic truncate max-w-[180px]">
                      {activeSession.isTracking ? activeSession.title : "No Active Stream"}
                    </span>
                  </div>
                  
                  {activeSession.isTracking && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-white/40">
                        <span>SESSION PROGRESS</span>
                        <span>{activeSession.progress}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white transition-all duration-500" 
                          style={{ width: `${activeSession.progress}%` }} 
                        />
                      </div>
                    </div>
                  )}

                  <Button className="w-full bg-white text-black hover:bg-white/90 font-black h-12 rounded-xl transition-all hover:scale-[1.02] text-[10px] tracking-widest uppercase">
                    {isExtensionInstalled ? "EXTENSION CONTROLS" : "GET EXTENSION"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* UGF Gasless Mint Status / Next Mint Eligibility */}
          <AnimatePresence mode="wait">
            {mintStatus.status !== "idle" ? (
              <motion.div
                key="mint-status-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card className="premium-glass border-white/[0.05] overflow-hidden group">
                  <div className="absolute inset-0 bg-linear-to-br from-emerald-600/10 to-transparent opacity-100" />
                  <CardHeader className="pb-4 relative z-10">
                    <CardTitle className="text-sm font-black text-white/40 uppercase tracking-[0.3em] flex items-center gap-3">
                      <Award className="w-4 h-4 text-emerald-400" />
                      UGF GASLESS MINT
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 relative z-10">
                    <div className="flex items-center gap-4">
                      {mintStatus.status !== "confirmed" && mintStatus.status !== "error" ? (
                        <Loader2 className="w-8 h-8 text-emerald-400 animate-spin flex-shrink-0" />
                      ) : mintStatus.status === "confirmed" ? (
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                          <ShieldCheck className="w-5 h-5" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400 flex-shrink-0">
                          <AlertCircle className="w-5 h-5" />
                        </div>
                      )}
                      <div>
                        <h4 className="text-sm font-black text-white uppercase tracking-wider">
                          {mintStatus.status === "quoting" && "1. Quoting remote fees..."}
                          {mintStatus.status === "settling" && "2. Settling gas with Mock USD..."}
                          {mintStatus.status === "executing" && "3. Remote executing..."}
                          {mintStatus.status === "confirmed" && "Mint Successful!"}
                          {mintStatus.status === "error" && "Mint failed"}
                        </h4>
                        <p className="text-xs text-white/40 font-medium leading-relaxed mt-1">
                          {mintStatus.status === "quoting" && "Calculating transaction quotes on Base Sepolia."}
                          {mintStatus.status === "settling" && "UGF routing gas fees. ETH is not required."}
                          {mintStatus.status === "executing" && "Calling smart contract on Base Sepolia."}
                          {mintStatus.status === "confirmed" && "Certificate is fully registered on-chain."}
                          {mintStatus.status === "error" && (mintStatus.error || "UGF remote execution encountered an error.")}
                        </p>
                      </div>
                    </div>

                    {mintStatus.txHash && (
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.03] space-y-2">
                        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
                          <span>BASE SEPOLIA HASH</span>
                          <span className="text-emerald-400 font-mono tracking-tighter truncate max-w-[120px]">
                            {mintStatus.txHash}
                          </span>
                        </div>
                        {mintStatus.tokenId && (
                          <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
                            <span>NFT TOKEN ID</span>
                            <span className="text-white font-mono tracking-tighter">
                              {mintStatus.tokenId}
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    {mintStatus.status === "confirmed" ? (
                      <Button 
                        onClick={() => window.open(`https://sepolia.basescan.org/tx/${mintStatus.txHash}`, "_blank")}
                        className="w-full bg-white text-black hover:bg-white/90 font-black h-10 rounded-xl text-[10px] tracking-widest uppercase gap-2"
                      >
                        VIEW ON BASESCAN
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Button>
                    ) : mintStatus.status === "error" ? (
                      <Button 
                        onClick={handleMintClick}
                        className="w-full bg-rose-500 text-white hover:bg-rose-600 font-black h-10 rounded-xl text-[10px] tracking-widest uppercase"
                      >
                        RETRY GASLESS MINT
                      </Button>
                    ) : null}
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                key="next-mint-eligibility-card"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card className="premium-glass border-white/[0.03]">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-sm font-black text-white/40 uppercase tracking-[0.3em] flex items-center gap-3">
                      <Target className="w-4 h-4" />
                      NEXT MINT
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex justify-between text-[11px] font-black uppercase tracking-widest mb-1">
                        <span className="text-white/60">Mastery in TypeScript</span>
                        <span className="text-white">85%</span>
                      </div>
                      <div className="h-2 w-full bg-white/[0.03] rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "85%" }}
                          transition={{ duration: 2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full bg-white" 
                        />
                      </div>
                    </div>
                    <p className="text-xs text-white/30 font-medium leading-relaxed">
                      Complete <span className="text-white font-bold">3 more hours</span> of verified TypeScript content to mint your next certificate.
                    </p>
                    <Button 
                      onClick={handleMintClick}
                      disabled={!isExtensionInstalled}
                      className="w-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] text-white text-[10px] font-black uppercase tracking-widest h-10 rounded-xl disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      MINT WITH UGF (GASLESS)
                      <ChevronRight className="w-3.5 h-3.5 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <CategoryAnalytics />
        <RecentSessions />
      </div>

      {/* Summary Footer */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="grid gap-6 md:grid-cols-3 pt-8"
      >
        {[
          { icon: Calendar, label: "Consistency", val: "92%", sub: "EXCELLENT", color: "text-amber-500", bg: "bg-amber-500/10" },
          { icon: Activity, label: "Active Sessions", val: isExtensionInstalled && activeSession.isTracking ? "1" : "0", sub: "TODAY", color: "text-purple-500", bg: "bg-purple-500/10" },
          { icon: Award, label: "Minted Assets", val: "14", sub: "+2 PENDING", color: "text-blue-500", bg: "bg-blue-500/10" }
        ].map((item, i) => (
          <div key={i} className="premium-glass border-white/[0.03] rounded-[32px] p-6 flex items-center gap-6 group hover:bg-white/[0.05] transition-all">
            <div className={cn("p-4 rounded-2xl transition-all duration-500 group-hover:bg-white group-hover:text-black", item.bg, "text-white")}>
              <item.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-black mb-1">{item.label}</p>
              <div className="flex items-baseline gap-2">
                <p className="text-2xl font-black text-white tracking-tighter">{item.val}</p>
                <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">{item.sub}</span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
