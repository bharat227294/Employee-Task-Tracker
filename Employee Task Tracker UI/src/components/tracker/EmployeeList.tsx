import React from 'react';
import { EmployeeCard } from './EmployeeCard';
import { Employee, Task, Status } from './types';

interface EmployeeListProps {
  employees: Employee[];
  tasks: Task[];
  onUpdateTaskStatus: (taskId: string, status: Status) => void;
  onDeleteEmployee: (employeeId: string) => void;
  onDeleteTask: (taskId: string) => void;
  currentFilter: Status | 'All';
}

export const EmployeeList: React.FC<EmployeeListProps> = ({ 
  employees, 
  tasks, 
  onUpdateTaskStatus, 
  onDeleteEmployee,
  onDeleteTask,
  currentFilter 
}) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {employees.map((employee) => {
        // Filter tasks for this employee
        const employeeTasks = tasks.filter(task => 
          task.employeeId === employee.id && 
          (currentFilter === 'All' || task.status === currentFilter)
        );

        return (
          <EmployeeCard 
            key={employee.id}
            employee={employee}
            tasks={employeeTasks}
            onUpdateTaskStatus={onUpdateTaskStatus}
            onDeleteEmployee={onDeleteEmployee}
            onDeleteTask={onDeleteTask}
          />
        );
      })}
    </div>
  );
};
