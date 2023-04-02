import "./styles.css";
import { AppBar, Typography, Button, Box, Toolbar, Stack } from '@mui/material';

function Navbar() {
    return (
        <>
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Logo</Typography>
                    <Stack direction="row" spacing={2}>
                        <Button color="inherit" variant="outlined">Login</Button>
                        <Button color="inherit" variant="outlined">Signup</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;