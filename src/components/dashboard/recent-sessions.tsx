"use client";

import React from "react";
import { Youtube, ExternalLink, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const sessions = [
  {
    id: 1,
    title: "Advanced TypeScript Patterns",
    platform: "YouTube",
    duration: "45m",
    timestamp: "2 hours ago",
    status: "Verified",
    category: "Software Engineering",
  },
  {
    id: 2,
    title: "Understanding Next.js 15 Server Components",
    platform: "YouTube",
    duration: "1h 20m",
    timestamp: "5 hours ago",
    status: "Verified",
    category: "Web Development",
  },
  {
    id: 3,
    title: "Machine Learning Foundations",
    platform: "Coursera",
    duration: "2h 15m",
    timestamp: "Yesterday",
    status: "Verified",
    category: "AI/ML",
  },
  {
    id: 4,
    title: "Product Management Strategy",
    platform: "YouTube",
    duration: "30m",
    timestamp: "Yesterday",
    status: "Pending",
    category: "Business",
  },
];

export function RecentSessions() {
  return (
    <Card className="border-white/5 bg-white/[0.03] backdrop-blur-xl">
      <CardHeader>
        <CardTitle className="text-white">Recent Sessions</CardTitle>
        <CardDescription className="text-muted-foreground">
          Your latest educational activities and their verification status.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sessions.map((session, index) => (
            <motion.div
              key={session.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.05]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
                  <Youtube className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                    {session.title}
                  </h4>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" /> {session.duration}
                    </span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{session.timestamp}</span>
                    <Badge variant="outline" className="h-5 text-[10px] border-white/10 bg-white/5 text-muted-foreground">
                      {session.category}
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge 
                  variant={session.status === "Verified" ? "default" : "secondary"}
                  className={
                    session.status === "Verified" 
                      ? "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 border-emerald-500/20" 
                      : "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 border-amber-500/20"
                  }
                >
                  {session.status === "Verified" && <CheckCircle2 className="mr-1 h-3 w-3" />}
                  {session.status}
                </Badge>
                <button className="rounded-full p-2 text-muted-foreground hover:bg-white/10 hover:text-white transition-colors">
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
