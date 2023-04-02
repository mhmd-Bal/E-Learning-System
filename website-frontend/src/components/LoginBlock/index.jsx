import {Box, Container, Typography, Checkbox ,CssBaseline, TextField, FormControlLabel, Button, Link, Stack} from '@mui/material';
import { useNavigate } from "react-router-dom";

function LoginBlock() {
    const navigate = useNavigate();

    const handleRegisterNavigation = () => {
        navigate("/register");
    }

    return (
        <Container sx={{display: 'flex', justifyContent: 'center'}}>
            <CssBaseline />
            <Box sx={{maxWidth: 415, mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography variant="h3">Sign in</Typography>
                <Box component="form" noValidate mt={2}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Stack direction="column" spacing={3}>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button type="submit" fullWidth variant="contained">Sign In</Button>
                        <Link variant="body2" onClick={handleRegisterNavigation} sx={{cursor: 'pointer'}}>Don't have an account? Sign Up</Link>
                    </Stack>
                </Box>
            </Box>
        </Container>
    )
}

export default LoginBlock;