import React, { useState } from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Employee } from './types';

interface AddEmployeeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (employee: Omit<Employee, 'id'>) => void;
}

export const AddEmployeeModal: React.FC<AddEmployeeModalProps> = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const handleSave = () => {
    if (name && role) {
      onSave({ name, role });
      setName('');
      setRole('');
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="border-slate-800 bg-slate-900 text-slate-50 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-white">Add New Employee</DialogTitle>
          <DialogDescription className="text-slate-400">
            Enter the details of the new employee below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-slate-300">Employee Name</Label>
            <Input 
              id="name" 
              placeholder="e.g. John Doe" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-slate-700 bg-slate-950 text-slate-200 placeholder:text-slate-500 focus-visible:ring-yellow-500"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="role" className="text-slate-300">Job Role</Label>
            <Input 
              id="role" 
              placeholder="e.g. Product Designer" 
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border-slate-700 bg-slate-950 text-slate-200 placeholder:text-slate-500 focus-visible:ring-yellow-500"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} className="border-slate-700 bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white">
            Cancel
          </Button>
          <Button onClick={handleSave} className="bg-yellow-500 text-slate-900 hover:bg-yellow-600">
            Add Employee
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
