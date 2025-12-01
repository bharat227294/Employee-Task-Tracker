import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";

interface DashboardStats {
  total: number;
  completed: number;
  inProgress: number;
  pending: number;
  completionRate: number;
}

interface DashboardSummaryProps {
  stats: DashboardStats;
}

export const DashboardSummary: React.FC<DashboardSummaryProps> = ({ stats }) => {
  return (
    <Card className="border-slate-800 bg-slate-900/80 backdrop-blur-md text-slate-50">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-slate-100">Dashboard Summary</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="space-y-1 rounded-md bg-slate-950/50 p-3">
            <p className="text-xs font-medium text-slate-400">Total Tasks</p>
            <p className="text-2xl font-bold text-slate-50">{stats.total}</p>
          </div>
          <div className="space-y-1 rounded-md bg-slate-950/50 p-3">
            <p className="text-xs font-medium text-green-400">Completed</p>
            <p className="text-2xl font-bold text-slate-50">{stats.completed}</p>
          </div>
          <div className="space-y-1 rounded-md bg-slate-950/50 p-3">
            <p className="text-xs font-medium text-orange-400">In Progress</p>
            <p className="text-2xl font-bold text-slate-50">{stats.inProgress}</p>
          </div>
          <div className="space-y-1 rounded-md bg-slate-950/50 p-3">
            <p className="text-xs font-medium text-yellow-400">Pending</p>
            <p className="text-2xl font-bold text-slate-50">{stats.pending}</p>
          </div>
        </div>
        
        <div className="space-y-2 pt-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium text-slate-300">Completion</span>
            <span className="text-slate-400">{Math.round(stats.completionRate)}%</span>
          </div>
          <Progress value={stats.completionRate} className="h-2 bg-slate-800" />
        </div>
      </CardContent>
    </Card>
  );
};
