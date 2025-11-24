import { Box, Drawer, AppBar, Toolbar, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Breadcrumbs, Link as MuiLink, CssBaseline } from '@mui/material';
import { TableChart, ViewModule } from '@mui/icons-material';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import styles from './MainLayout.module.scss';

export const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: 'List View', icon: <TableChart />, path: '/list' },
    { text: 'Card View', icon: <ViewModule />, path: '/cards' },
  ];

  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Box className={styles.root}>
      <CssBaseline />
      <AppBar position="fixed" className={styles.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" className={styles.title}>
            Newforma Konekt
          </Typography>
          <Box className={styles.breadcrumbsContainer}>
             <Breadcrumbs aria-label="breadcrumb" className={styles.breadcrumbs}>
                <MuiLink underline="hover" color="inherit" onClick={() => navigate('/')} className={styles.breadcrumbLink}>
                  Home
                </MuiLink>
                {pathnames.map((value, index) => {
                  const last = index === pathnames.length - 1;
                  const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                  return last ? (
                    <Typography color="inherit" key={to} className={styles.breadcrumbCurrent}>
                      {value}
                    </Typography>
                  ) : (
                    <MuiLink
                      underline="hover"
                      color="inherit"
                      key={to}
                      onClick={() => navigate(to)}
                      className={styles.breadcrumbLink}
                    >
                      {value}
                    </MuiLink>
                  );
                })}
              </Breadcrumbs>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={styles.drawer}
      >
        <Toolbar />
        <Box className={styles.drawerContent}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={() => navigate(item.path)} selected={location.pathname === item.path}>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" className={styles.mainContent}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};
