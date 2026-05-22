"use client";

import React from "react";
import { ExternalLink, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { Youtube } from "@/components/ui/youtube-icon";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const sessions = [
  {
    id: 1,
    title: "Advanced TypeScript Patterns",
    platform: "YouTube",
    duration: "45m",
    timestamp: "2 HOURS AGO",
    status: "Verified",
    category: "Software Engineering",
  },
  {
    id: 2,
    title: "Understanding Next.js 15 Server Components",
    platform: "YouTube",
    duration: "1h 20m",
    timestamp: "5 HOURS AGO",
    status: "Verified",
    category: "Web Development",
  },
  {
    id: 3,
    title: "Machine Learning Foundations",
    platform: "Coursera",
    duration: "2h 15m",
    timestamp: "YESTERDAY",
    status: "Verified",
    category: "AI/ML",
  },
  {
    id: 4,
    title: "Product Management Strategy",
    platform: "YouTube",
    duration: "30m",
    timestamp: "YESTERDAY",
    status: "Pending",
    category: "Business",
  },
];

export function RecentSessions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>RECENT SESSIONS</CardTitle>
        <CardDescription>
          Your latest educational activities and their verification status on the network.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sessions.map((session, index) => (
            <motion.div
              key={session.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-center justify-between rounded-2xl border border-white/[0.03] bg-white/[0.01] p-5 transition-all hover:bg-white/[0.04]"
            >
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.03] text-white/40 group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <Youtube className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white tracking-tight">
                    {session.title}
                  </h4>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
                      <Clock className="h-3.5 w-3.5" /> {session.duration}
                    </span>
                    <span className="text-[10px] text-white/10">•</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">{session.timestamp}</span>
                    <Badge variant="outline" className="h-5 px-2">
                      {session.category}
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Badge 
                  variant={session.status === "Verified" ? "default" : "secondary"}
                  className="px-3"
                >
                  {session.status === "Verified" && <CheckCircle2 className="mr-1.5 h-3.5 w-3.5" />}
                  {session.status}
                </Badge>
                <button className="rounded-full p-2.5 text-white/20 hover:bg-white/[0.05] hover:text-white transition-all">
                  <ExternalLink className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
