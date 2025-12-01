import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Employee, Task } from './types';

interface EmployeeStatsTableProps {
  employees: Employee[];
  tasks: Task[];
}

export const EmployeeStatsTable: React.FC<EmployeeStatsTableProps> = ({ employees, tasks }) => {
  // Calculate stats for each employee
  const employeeStats = employees.map(employee => {
    const empTasks = tasks.filter(t => t.employeeId === employee.id);
    const pending = empTasks.filter(t => t.status === 'Pending').length;
    const inProgress = empTasks.filter(t => t.status === 'In Progress').length;
    const completed = empTasks.filter(t => t.status === 'Completed').length;
    
    return {
      ...employee,
      pending,
      inProgress,
      completed
    };
  });

  return (
    <Card className="mb-8 border-slate-800 bg-slate-900/80 backdrop-blur-md text-slate-50 shadow-lg">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-medium text-slate-100">Employee Performance Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-slate-800/50 border-slate-800">
              <TableHead className="w-[100px] text-slate-400">ID</TableHead>
              <TableHead className="text-slate-400">Name</TableHead>
              <TableHead className="text-slate-400">Designation</TableHead>
              <TableHead className="text-center text-yellow-500">Pending</TableHead>
              <TableHead className="text-center text-orange-500">In Progress</TableHead>
              <TableHead className="text-center text-green-500">Completed</TableHead>
              <TableHead className="text-right text-slate-400">Total Tasks</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employeeStats.map((emp) => (
              <TableRow key={emp.id} className="hover:bg-slate-800/50 border-slate-800">
                <TableCell className="font-medium text-slate-500">{emp.id.substring(0, 4)}</TableCell>
                <TableCell className="font-medium text-slate-200">{emp.name}</TableCell>
                <TableCell className="text-slate-300">{emp.role}</TableCell>
                <TableCell className="text-center font-semibold text-yellow-400/90">{emp.pending}</TableCell>
                <TableCell className="text-center font-semibold text-orange-400/90">{emp.inProgress}</TableCell>
                <TableCell className="text-center font-semibold text-green-400/90">{emp.completed}</TableCell>
                <TableCell className="text-right text-slate-300">
                  {emp.pending + emp.inProgress + emp.completed}
                </TableCell>
              </TableRow>
            ))}
            {employeeStats.length === 0 && (
                <TableRow className="hover:bg-transparent border-slate-800">
                    <TableCell colSpan={7} className="text-center text-slate-500 py-8">
                        No employees found.
                    </TableCell>
                </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
