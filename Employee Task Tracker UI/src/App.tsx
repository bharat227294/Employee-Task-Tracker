import React, { useState, useMemo, useEffect } from "react";
import { Header } from "./components/tracker/Header";
import { DashboardSummary } from "./components/tracker/DashboardSummary";
import { TaskFilters } from "./components/tracker/TaskFilters";
import { EmployeeList } from "./components/tracker/EmployeeList";
import { EmployeeStatsTable } from "./components/tracker/EmployeeStatsTable";
import { AddTaskModal } from "./components/tracker/AddTaskModal";
import { AddEmployeeModal } from "./components/tracker/AddEmployeeModal";
import {
  Employee,
  Task,
  Status,
} from "./components/tracker/types";

// Helper for random ID
const generateId = () =>
  Math.random().toString(36).substr(2, 9);

// Mock Data
const INITIAL_EMPLOYEES: Employee[] = [
  {
    id: "e1",
    name: "Alice Johnson",
    role: "Frontend Developer",
  },
  { id: "e2", name: "Bob Smith", role: "Backend Developer" },
  { id: "e3", name: "Charlie Davis", role: "UI/UX Designer" },
  { id: "e4", name: "Dana Lee", role: "Project Manager" },
];

const INITIAL_TASKS: Task[] = [
  {
    id: "t1",
    employeeId: "e1",
    title: "Build login page",
    status: "Completed",
  },
  {
    id: "t2",
    employeeId: "e1",
    title: "Fix navigation bug",
    status: "In Progress",
  },
  {
    id: "t3",
    employeeId: "e2",
    title: "Database schema setup",
    status: "Completed",
  },
  {
    id: "t4",
    employeeId: "e2",
    title: "Create API endpoints",
    status: "Pending",
  },
  {
    id: "t5",
    employeeId: "e3",
    title: "Design dashboard layout",
    status: "Completed",
  },
  {
    id: "t6",
    employeeId: "e3",
    title: "Mobile responsive mockups",
    status: "In Progress",
  },
  {
    id: "t7",
    employeeId: "e4",
    title: "Q3 Roadmap definition",
    status: "Completed",
  },
  {
    id: "t8",
    employeeId: "e4",
    title: "Client meeting prep",
    status: "Pending",
  },
];

const App: React.FC = () => {
  // Initialize state with Local Storage check
  const [employees, setEmployees] = useState<Employee[]>(() => {
    const saved = localStorage.getItem("employees");
    return saved ? JSON.parse(saved) : INITIAL_EMPLOYEES;
  });

  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : INITIAL_TASKS;
  });

  const [filter, setFilter] = useState<Status | "All">("All");
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isEmployeeModalOpen, setIsEmployeeModalOpen] =
    useState(false);

  // Persistence Effects
  useEffect(() => {
    localStorage.setItem(
      "employees",
      JSON.stringify(employees),
    );
  }, [employees]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Calculate stats
  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(
      (t) => t.status === "Completed",
    ).length;
    const inProgress = tasks.filter(
      (t) => t.status === "In Progress",
    ).length;
    const pending = tasks.filter(
      (t) => t.status === "Pending",
    ).length;
    const completionRate =
      total > 0 ? (completed / total) * 100 : 0;

    return {
      total,
      completed,
      inProgress,
      pending,
      completionRate,
    };
  }, [tasks]);

  // Handlers
  const handleUpdateTaskStatus = (
    taskId: string,
    newStatus: Status,
  ) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, status: newStatus }
          : task,
      ),
    );
  };

  const handleAddTask = (taskData: {
    employeeId: string;
    title: string;
    status: Status;
  }) => {
    const newTask: Task = {
      id: generateId(),
      ...taskData,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const handleAddEmployee = (
    employeeData: Omit<Employee, "id">,
  ) => {
    const newEmployee: Employee = {
      id: generateId(),
      ...employeeData,
    };
    setEmployees((prev) => [...prev, newEmployee]);
  };
  
  const handleDeleteEmployee = (employeeId: string) => {
    if (window.confirm("Are you sure you want to delete this employee? This will also delete their tasks.")) {
        setEmployees(prev => prev.filter(e => e.id !== employeeId));
        setTasks(prev => prev.filter(t => t.employeeId !== employeeId));
    }
  };

  const handleDeleteTask = (taskId: string) => {
      if (window.confirm("Are you sure you want to delete this task?")) {
          setTasks(prev => prev.filter(t => t.id !== taskId));
      }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-purple-500 to-pink-500 font-sans text-slate-50 selection:bg-yellow-300/50">
      <Header />

      <main className="mx-auto max-w-[1200px] p-4 sm:p-6 lg:p-8">
        <div className="mb-8 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {/* Top Section: Dashboard & Controls */}
          <div className="lg:col-span-2">
            <DashboardSummary stats={stats} />
          </div>
          <div className="lg:col-span-1">
            <TaskFilters
              currentFilter={filter}
              setFilter={setFilter}
              onAddTaskClick={() => setIsTaskModalOpen(true)}
              onAddEmployeeClick={() =>
                setIsEmployeeModalOpen(true)
              }
            />
          </div>
        </div>

        {/* Employee Stats Table */}
        <EmployeeStatsTable employees={employees} tasks={tasks} />

        {/* Bottom Section: Employee List */}
        <section>
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-900 drop-shadow-sm">
            Employee Tasks
          </h2>
          <EmployeeList
            employees={employees}
            tasks={tasks}
            onUpdateTaskStatus={handleUpdateTaskStatus}
            onDeleteEmployee={handleDeleteEmployee}
            onDeleteTask={handleDeleteTask}
            currentFilter={filter}
          />
        </section>
      </main>

      <AddTaskModal
        isOpen={isTaskModalOpen}
        onClose={() => setIsTaskModalOpen(false)}
        onSave={handleAddTask}
        employees={employees}
      />

      <AddEmployeeModal
        isOpen={isEmployeeModalOpen}
        onClose={() => setIsEmployeeModalOpen(false)}
        onSave={handleAddEmployee}
      />
    </div>
  );
};

export default App;
