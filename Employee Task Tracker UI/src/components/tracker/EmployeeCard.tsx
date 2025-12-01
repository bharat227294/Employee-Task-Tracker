import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Employee, Task, Status } from './types';
import { Trash2, UserMinus } from "lucide-react";

interface EmployeeCardProps {
  employee: Employee;
  tasks: Task[];
  onUpdateTaskStatus: (taskId: string, status: Status) => void;
  onDeleteEmployee: (employeeId: string) => void;
  onDeleteTask: (taskId: string) => void;
}

const getStatusColor = (status: Status) => {
  switch (status) {
    case 'Completed':
      return 'bg-green-900/50 text-green-400 hover:bg-green-900/60 border-green-800';
    case 'In Progress':
      return 'bg-orange-900/50 text-orange-400 hover:bg-orange-900/60 border-orange-800';
    case 'Pending':
      return 'bg-yellow-900/50 text-yellow-400 hover:bg-yellow-900/60 border-yellow-800';
    default:
      return 'bg-slate-800 text-slate-400';
  }
};

export const EmployeeCard: React.FC<EmployeeCardProps> = ({ 
  employee, 
  tasks, 
  onUpdateTaskStatus,
  onDeleteEmployee,
  onDeleteTask
}) => {
  return (
    <Card className="h-full border-slate-800 bg-slate-900/80 backdrop-blur-md text-slate-50 shadow-lg group/card relative">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-base font-semibold text-slate-100">{employee.name}</CardTitle>
            <p className="text-xs text-slate-400">{employee.role}</p>
          </div>
          <div className="flex items-center gap-2">
             <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-xs font-medium text-slate-400">
              {tasks.length}
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => onDeleteEmployee(employee.id)}
              className="h-8 w-8 text-slate-500 hover:text-red-400 hover:bg-red-950/30 opacity-0 group-hover/card:opacity-100 transition-opacity"
              title="Delete Employee"
            >
              <UserMinus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {tasks.length === 0 ? (
          <div className="py-8 text-center text-sm text-slate-500">
            No tasks under this filter.
          </div>
        ) : (
          <ul className="space-y-4">
            {tasks.map((task) => (
              <li key={task.id} className="group rounded-md border border-slate-800 bg-slate-950/30 p-3 transition-colors hover:border-slate-700 relative pr-8">
                <div className="mb-3 flex items-start justify-between gap-2">
                  <span className="text-sm font-medium text-slate-200 leading-tight">{task.title}</span>
                  <Badge variant="outline" className={`shrink-0 border ${getStatusColor(task.status)}`}>
                    {task.status}
                  </Badge>
                </div>
                <Select 
                  defaultValue={task.status} 
                  onValueChange={(val) => onUpdateTaskStatus(task.id, val as Status)}
                >
                  <SelectTrigger className="h-8 w-full border-slate-700 bg-slate-900 text-xs text-slate-300 focus:ring-slate-700">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent className="border-slate-700 bg-slate-900 text-slate-200">
                    <SelectItem value="Pending" className="focus:bg-slate-800 focus:text-white">Pending</SelectItem>
                    <SelectItem value="In Progress" className="focus:bg-slate-800 focus:text-white">In Progress</SelectItem>
                    <SelectItem value="Completed" className="focus:bg-slate-800 focus:text-white">Completed</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onDeleteTask(task.id)}
                  className="absolute top-2 right-1 h-6 w-6 text-slate-600 hover:text-red-400 hover:bg-red-950/30 opacity-0 group-hover:opacity-100 transition-opacity"
                  title="Delete Task"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};
