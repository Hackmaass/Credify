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
  { subject: "Engineering", A: 120, fullMark: 150 },
  { subject: "Design", A: 98, fullMark: 150 },
  { subject: "Business", A: 86, fullMark: 150 },
  { subject: "AI/ML", A: 99, fullMark: 150 },
  { subject: "Soft Skills", A: 85, fullMark: 150 },
  { subject: "Marketing", A: 65, fullMark: 150 },
];

export function CategoryAnalytics() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Card className="border-white/5 bg-white/[0.03] backdrop-blur-xl h-full">
        <CardHeader>
          <CardTitle className="text-white">Knowledge Graph</CardTitle>
          <CardDescription className="text-muted-foreground">
            Distribution of your verified learning across categories.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <div className="h-[300px] w-full max-w-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid stroke="#ffffff10" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: "#ffffff50", fontSize: 10 }} />
                <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                <Radar
                  name="Proficiency"
                  dataKey="A"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.5}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
