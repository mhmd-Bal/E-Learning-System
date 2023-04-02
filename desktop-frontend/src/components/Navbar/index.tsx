import {AppBar, CssBaseline, Toolbar, Typography, Stack, Button, IconButton, Drawer, Box, List,ListItemText, ListItem, ListItemButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Sidebar from 'components/Sidebar';

 

function Navbar() {
  const [openedDrawer, setOpenedDrawer] = useState(false);
  
  const handleDrawerToggle = () => {
    setOpenedDrawer(!openedDrawer);
  }


    return (
      <>
        <AppBar position="relative">
          <CssBaseline />
          <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Admin Panel</Typography>
            <Stack direction="row" spacing={2}>
                <Button color="inherit" >Logout</Button>
            </Stack>
          </Toolbar>
        </AppBar>

        <Box>
          <Drawer
            variant="temporary"
            open={openedDrawer}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block'},
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
            }}
          >
            <List>
              {['Classes', 'Users', 'Withdrawal Forms'].map((text, index) => (
                <ListItem key={text} >
                  <ListItemButton >
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Box>
      </>
      
    );
  }
  
export default Navbar;
  