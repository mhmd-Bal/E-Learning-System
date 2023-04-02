import "./styles.css";
import { AppBar, Typography, Button, Box, Toolbar, Stack, CssBaseline } from '@mui/material';
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const handleLoginNavigation = () => {
        navigate("/login");
    }

    const handleHomeNavigation = () => {
        navigate("/");
    }

    return (
        <>
            <AppBar position="relative">
                <CssBaseline />
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: "pointer" }} onClick={handleHomeNavigation}>Logo</Typography>
                    <Stack direction="row" spacing={2}>
                        <Button color="inherit" variant="outlined" onClick={handleLoginNavigation}>Login</Button>
                        <Button color="inherit" variant="outlined">Signup</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;