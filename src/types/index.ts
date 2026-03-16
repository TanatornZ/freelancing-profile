export type ProjectStatus = 'In Progress' | 'Completed' | 'Overdue' | 'On Hold';
export type InvoiceStatus = 'Paid' | 'Pending' | 'Overdue';
export type Priority = 'High' | 'Medium' | 'Low';

export interface Project {
  id: string;
  name: string;
  client: string;
  status: ProjectStatus;
  priority: Priority;
  budget: number;
  progress: number;
  deadline: string;
  category: string;
}

export interface Invoice {
  id: string;
  client: string;
  project: string;
  amount: number;
  status: InvoiceStatus;
  issuedDate: string;
  dueDate: string;
}

export interface Activity {
  id: string;
  type: 'payment' | 'message' | 'project' | 'deadline';
  title: string;
  description: string;
  time: string;
}

export interface MonthlyRevenue {
  month: string;
  revenue: number;
  expenses: number;
}
