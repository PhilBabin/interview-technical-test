export interface Project {
  id: string;
  name: string;
  status: 'Active' | 'Completed' | 'Pending';
  description: string;
  dueDate: string;
}
