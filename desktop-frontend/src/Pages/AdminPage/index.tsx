import {AppBar, CssBaseline, Toolbar, Typography, Stack, Button, IconButton, Drawer, Box, List,ListItemText, ListItem, ListItemButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';


function AdminPage() {
  const [openedDrawer, setOpenedDrawer] = useState(false);
  
  const handleDrawerToggle = () => {
    setOpenedDrawer(!openedDrawer);
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {field: 'age', headerName: 'Age', type: 'number', width: 90,},
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];


    return (
      <div style={{width: '100%%', display: 'flex', flexDirection: "column", justifyContent: 'center', padding: 'auto', alignItems:'center' }}>
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
              display: { boxSizing: 'border-box', width: 240 },
            }}
          >
            <List>
              {['Classes', 'Users', 'Withdrawal Forms'].map((text, index) => (
                <ListItem key={text} >
                  <ListItemButton >
                    <ListItemText primary={text} onClick={handleDrawerToggle} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Box>

        <div style={{ height: 500, width: '50%', marginTop: 70 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            checkboxSelection
            autoPageSize
          />
        </div>
      </div>
      
    );
  }
  
export default AdminPage;
  