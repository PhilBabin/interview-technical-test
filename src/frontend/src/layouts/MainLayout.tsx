import { Box, Drawer, AppBar, Toolbar, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Breadcrumbs, Link as MuiLink, CssBaseline } from '@mui/material';
import { TableChart, ViewModule } from '@mui/icons-material';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';

const drawerWidth = 240;

export const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: 'List View', icon: <TableChart />, path: '/list' },
    { text: 'Card View', icon: <ViewModule />, path: '/cards' },
  ];

  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ width: drawerWidth, flexShrink: 0 }}>
            Newforma Konekt
          </Typography>
          <Box sx={{ ml: 2 }}>
             <Breadcrumbs aria-label="breadcrumb" sx={{ color: 'inherit' }}>
                <MuiLink underline="hover" color="inherit" onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
                  Home
                </MuiLink>
                {pathnames.map((value, index) => {
                  const last = index === pathnames.length - 1;
                  const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                  return last ? (
                    <Typography color="inherit" key={to} sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
                      {value}
                    </Typography>
                  ) : (
                    <MuiLink
                      underline="hover"
                      color="inherit"
                      key={to}
                      onClick={() => navigate(to)}
                      sx={{ cursor: 'pointer', textTransform: 'capitalize' }}
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
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
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
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};
