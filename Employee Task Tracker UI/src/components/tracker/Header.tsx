import React from 'react';
import { Badge } from "../ui/badge";

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm px-6 py-4">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-50">Employee Task Tracker</h1>
          <p className="text-sm text-slate-400">Track employees, tasks, and status at a glance.</p>
        </div>
        <Badge variant="outline" className="hidden border-slate-700 text-slate-400 sm:flex">
          Frontend Mock App
        </Badge>
      </div>
    </header>
  );
};
