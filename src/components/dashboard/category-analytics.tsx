"use client";

import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";

const data = [
  { subject: "ENGINEERING", A: 120, fullMark: 150 },
  { subject: "DESIGN", A: 98, fullMark: 150 },
  { subject: "BUSINESS", A: 86, fullMark: 150 },
  { subject: "AI/ML", A: 99, fullMark: 150 },
  { subject: "SOFT SKILLS", A: 85, fullMark: 150 },
  { subject: "MARKETING", A: 65, fullMark: 150 },
];

export function CategoryAnalytics() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle>KNOWLEDGE GRAPH</CardTitle>
          <CardDescription>
            Distribution of your verified learning across the protocol network.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center pt-8">
          <div className="h-[350px] w-full max-w-[450px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid stroke="#ffffff08" />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={{ fill: "rgba(255,255,255,0.2)", fontSize: 10, fontWeight: 900 }} 
                />
                <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                <Radar
                  name="Proficiency"
                  dataKey="A"
                  stroke="#ffffff"
                  fill="#ffffff"
                  fillOpacity={0.05}
                  strokeWidth={2}
                />
                <Radar
                  name="Network Average"
                  dataKey="fullMark"
                  stroke="rgba(59, 130, 246, 0.2)"
                  fill="transparent"
                  strokeWidth={1}
                  strokeDasharray="4 4"
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
