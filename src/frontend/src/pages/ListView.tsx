import { useEffect, useState } from 'react';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { Box, Typography, Paper } from '@mui/material';
import type { Project } from '../types';
import { getProjects } from '../services/projectService';
import styles from './ListView.module.scss';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Project Name', width: 200 },
  { field: 'status', headerName: 'Status', width: 130 },
  { field: 'description', headerName: 'Description', width: 300 },
  { field: 'dueDate', headerName: 'Due Date', width: 130 },
];

const ListView = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects().then((data) => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Project List
      </Typography>
      <Paper className={styles.gridContainer}>
        <DataGrid
          rows={projects}
          columns={columns}
          loading={loading}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </Paper>
    </Box>
  );
};

export default ListView;
