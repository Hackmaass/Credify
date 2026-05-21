"use client";

import React from "react";
import { 
  BarChart3, 
  TrendingUp, 
  BrainCircuit,
  Lock,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function AnalyticsPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-12 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-8"
      >
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 bg-white/[0.03] rounded-[32px] border border-white/[0.05] flex items-center justify-center shadow-2xl relative z-10">
              <BarChart3 className="w-12 h-12 text-white/20" />
            </div>
            <div className="absolute -inset-8 bg-purple-500/5 blur-3xl rounded-full" />
          </div>
        </div>

        <div className="space-y-4">
          <Badge variant="outline" className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] bg-white/[0.03] border-white/5 text-white/40">
            NETWORK UPDATE
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none uppercase">
            DEEP ANALYTICS <br />ENGINE
          </h1>
          <p className="text-xl text-white/40 max-w-xl mx-auto font-medium leading-relaxed">
            Advanced retention mapping, predictive skill forecasting, and peer-benchmarking metrics are currently in development.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <Button className="h-16 px-12 rounded-2xl bg-white text-black hover:bg-white/90 font-black shadow-2xl transition-all hover:scale-105 active:scale-95">
            JOIN WAITLIST
            <ArrowRight className="ml-3 w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3 text-white/20 text-[11px] font-black uppercase tracking-widest">
            <Lock className="w-4 h-4" />
            PROTOCOL RESTRICTED
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 w-full pt-16">
        {[
          { icon: TrendingUp, label: "Market Fit", desc: "Skill alignment indexing" },
          { icon: BrainCircuit, label: "Neural Insights", desc: "Cognitive retention modeling" },
          { icon: BarChart3, label: "Peer Rank", desc: "Global percentile validation" }
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + (i * 0.1), duration: 0.8 }}
            className="premium-glass p-6 rounded-[24px] border-white/[0.03] text-left group hover:bg-white/[0.05] transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-black transition-all">
              <feature.icon className="w-5 h-5" />
            </div>
            <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] mb-1">{feature.label}</p>
            <p className="text-sm font-bold text-white tracking-tight">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
