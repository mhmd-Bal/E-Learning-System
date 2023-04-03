import { AppBar, Typography, Button, Box, Toolbar, Stack, CssBaseline } from '@mui/material';
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const handleLoginNavigation = () => {
        navigate("/login");
    }

    const handleHomeNavigation = () => {
        navigate("/");
    }

    const handleRegisterNavigation = () => {
        navigate("/register");
    }

    const handleBrowseNavigation = () => {
        navigate("/browse");
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    }

    return (
        <>
            <AppBar position="relative">
                <CssBaseline />
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: "pointer" }} onClick={handleHomeNavigation}>Logo</Typography>
                    <Stack direction="row" spacing={2}>
                        <Button color="inherit" variant="outlined" onClick={token ? handleBrowseNavigation : handleLoginNavigation}>{token ? "Browse" : "Login"}</Button>
                        <Button color="inherit" variant="outlined" onClick={token ? handleLogout : handleRegisterNavigation}>{token ? "Logout" : "Sign Up"}</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;