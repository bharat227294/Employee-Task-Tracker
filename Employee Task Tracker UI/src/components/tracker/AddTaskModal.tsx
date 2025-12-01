import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Employee, Status } from "./types";

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (taskData: {
    employeeId: string;
    title: string;
    status: Status;
  }) => void;
  employees: Employee[];
}

export const AddTaskModal: React.FC<AddTaskModalProps> = ({
  isOpen,
  onClose,
  onSave,
  employees,
}) => {
  const [employeeId, setEmployeeId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [status, setStatus] = useState<Status>("Pending");

  const handleSave = () => {
    if (employeeId && title) {
      onSave({ employeeId, title, status });
      // Reset form
      setEmployeeId("");
      setTitle("");
      setStatus("Pending");
      onClose();
    }
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => !open && onClose()}
    >
      <DialogContent className="border-slate-800 bg-slate-900 text-slate-50 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-white">
            Add New Task
          </DialogTitle>
          <DialogDescription className="text-slate-400">
            Create a new task and assign it to an employee.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label
              htmlFor="employee"
              className="text-slate-300"
            >
              Assign to Employee
            </Label>
            <Select
              value={employeeId}
              onValueChange={setEmployeeId}
            >
              <SelectTrigger
                id="employee"
                className="border-slate-700 bg-slate-950 text-slate-200 focus:ring-blue-600"
              >
                <SelectValue placeholder="Select an employee" />
              </SelectTrigger>
              <SelectContent className="border-slate-700 bg-slate-900 text-slate-200">
                {employees.map((emp) => (
                  <SelectItem
                    key={emp.id}
                    value={emp.id}
                    className="focus:bg-slate-800 focus:text-white"
                  >
                    {emp.name}{" "}
                    <span className="text-slate-500">
                      ({emp.role})
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title" className="text-slate-300">
              Task Title
            </Label>
            <Input
              id="title"
              placeholder="Enter task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-slate-700 bg-slate-950 text-slate-200 placeholder:text-slate-500 focus-visible:ring-blue-600"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="status" className="text-slate-300">
              Status
            </Label>
            <Select
              value={status}
              onValueChange={(val) => setStatus(val as Status)}
            >
              <SelectTrigger
                id="status"
                className="border-slate-700 bg-slate-950 text-slate-200 focus:ring-blue-600"
              >
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent className="border-slate-700 bg-slate-900 text-slate-200">
                <SelectItem
                  value="Pending"
                  className="focus:bg-slate-800 focus:text-white"
                >
                  Pending
                </SelectItem>
                <SelectItem
                  value="In Progress"
                  className="focus:bg-slate-800 focus:text-white"
                >
                  In Progress
                </SelectItem>
                <SelectItem
                  value="Completed"
                  className="focus:bg-slate-800 focus:text-white"
                >
                  Completed
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={onClose}
            className="border-slate-700 bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Save Task
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};