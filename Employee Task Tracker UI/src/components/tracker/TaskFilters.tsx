import React from 'react';
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Plus, UserPlus } from "lucide-react";
import { Status } from './types';

interface TaskFiltersProps {
  currentFilter: Status | 'All';
  setFilter: (filter: Status | 'All') => void;
  onAddTaskClick: () => void;
  onAddEmployeeClick: () => void;
}

export const TaskFilters: React.FC<TaskFiltersProps> = ({ currentFilter, setFilter, onAddTaskClick, onAddEmployeeClick }) => {
  const filters: (Status | 'All')[] = ['All', 'Pending', 'In Progress', 'Completed'];

  return (
    <Card className="flex h-full flex-col justify-center border-slate-800 bg-slate-900/80 backdrop-blur-md p-6 text-slate-50">
      <CardContent className="flex flex-row items-center justify-between p-0 h-full">
        {/* Left Column: Filters */}
        <div className="flex flex-col gap-3">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={currentFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(filter)}
              className={`justify-start rounded-full px-4 py-2 text-xs transition-all ${
                currentFilter === filter 
                  ? "bg-yellow-500 text-slate-900 hover:bg-yellow-600 font-bold shadow-lg shadow-yellow-500/20" 
                  : "border-slate-700 bg-slate-950/50 text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Right Column: Actions */}
        <div className="flex flex-col gap-3 items-end justify-center">
           <Button 
            onClick={onAddEmployeeClick}
            variant="outline"
            className="h-10 border-slate-700 bg-slate-950/50 text-slate-300 hover:bg-slate-800 hover:text-white w-40 justify-start"
          >
            <UserPlus className="mr-2 h-4 w-4" />
            Add Employee
          </Button>
          <Button 
            onClick={onAddTaskClick}
            className="h-10 bg-violet-600 hover:bg-violet-700 text-white w-40 justify-start shadow-lg shadow-violet-600/20"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add New Task
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
