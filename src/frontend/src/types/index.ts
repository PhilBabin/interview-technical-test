export interface Project {
  id: number;
  name: string;
  status: string;
  description: string;
  dueDate: string;
  completedDate?: string;
  buildingId?: number;
}
