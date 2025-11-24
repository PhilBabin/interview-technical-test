import { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent, CardActions, Button, Grid } from '@mui/material';
import type { Project } from '../types';
import { getProjects } from '../services/mockData';

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
          <Grid key={project.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {project.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {project.status}
                </Typography>
                <Typography variant="body2">
                  {project.description}
                </Typography>
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
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
