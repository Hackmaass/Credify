"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function DashboardSkeleton() {
  return (
    <div className="space-y-8 pb-12 animate-pulse">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <Skeleton className="h-10 w-48 bg-white/5" />
          <Skeleton className="h-4 w-72 bg-white/5" />
        </div>
        <Skeleton className="h-10 w-32 bg-white/5" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="border-white/5 bg-white/[0.03]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <Skeleton className="h-4 w-24 bg-white/5" />
              <Skeleton className="h-8 w-8 rounded-lg bg-white/5" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-16 mb-2 bg-white/5" />
              <Skeleton className="h-3 w-32 bg-white/5" />
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Card className="border-white/5 bg-white/[0.03] h-[400px]">
            <CardHeader>
              <Skeleton className="h-6 w-48 bg-white/5 mb-2" />
              <Skeleton className="h-4 w-64 bg-white/5" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-[250px] w-full bg-white/5" />
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-4 space-y-6">
          <Card className="border-white/5 bg-white/[0.03] h-[180px]">
            <CardHeader>
              <Skeleton className="h-6 w-32 bg-white/5" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-12 w-full bg-white/5 mb-4" />
              <Skeleton className="h-10 w-full bg-white/5" />
            </CardContent>
          </Card>
          <Card className="border-white/5 bg-white/[0.03] h-[180px]">
            <CardHeader>
              <Skeleton className="h-6 w-32 bg-white/5" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full bg-white/5 mb-2" />
              <Skeleton className="h-2 w-full bg-white/5 mb-4" />
              <Skeleton className="h-10 w-full bg-white/5" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
