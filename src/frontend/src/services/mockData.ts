import type { Project } from '../types';

export const mockProjects: Project[] = [
  { id: '1', name: 'Office Tower A', status: 'Active', description: 'Construction of the main office tower.', dueDate: '2024-12-01' },
  { id: '2', name: 'City Bridge Renovation', status: 'Pending', description: 'Renovation of the old city bridge.', dueDate: '2025-03-15' },
  { id: '3', name: 'Residential Complex B', status: 'Completed', description: 'Phase 1 of the residential complex.', dueDate: '2023-11-20' },
  { id: '4', name: 'Central Park Landscape', status: 'Active', description: 'Landscaping for the central park area.', dueDate: '2024-06-30' },
  { id: '5', name: 'Subway Station Upgrade', status: 'Pending', description: 'Upgrading the signaling system.', dueDate: '2025-01-10' },
];

export const getProjects = (): Promise<Project[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockProjects), 500);
  });
};
