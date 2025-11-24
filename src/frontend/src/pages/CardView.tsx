import { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent, CardActions, Button, Grid } from '@mui/material';
import type { Project } from '../types';
import { getProjects } from '../services/projectService';
import styles from './CardView.module.scss';

const CardView = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Project Cards
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {project.name}
                </Typography>
                <Typography className={styles.status} color="text.secondary">
                  {project.status}
                </Typography>
                <Typography variant="body2">
                  {project.description}
                </Typography>
                <Typography variant="caption" display="block" className={styles.dueDate}>
                  Due: {project.dueDate}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardView;
