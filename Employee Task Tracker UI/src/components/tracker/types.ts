export type Status = 'Pending' | 'In Progress' | 'Completed';

export interface Task {
  id: string;
  employeeId: string;
  title: string;
  status: Status;
}

export interface Employee {
  id: string;
  name: string;
  role: string;
}
