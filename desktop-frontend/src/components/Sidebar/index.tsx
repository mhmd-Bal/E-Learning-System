import {Typography, Box, Button, Stack} from '@mui/material';

const navItems = ['Home', 'About', 'Contact'];

function Sidebar() {
    return (
      <>
        <Box sx={{ display: { display: 'block' } }}>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: '#fff' }}>
              {item}
            </Button>
          ))}
        </Box>
      </>
    );
  }
  
export default Sidebar;
  