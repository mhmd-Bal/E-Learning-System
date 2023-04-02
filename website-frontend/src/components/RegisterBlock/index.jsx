import {Box, Container, Typography, Checkbox ,CssBaseline, TextField, FormControlLabel, Button, Link, Stack} from '@mui/material';

function RegisterBlock() {
    const wrongemail = true;

    return (
        <Container>
            <CssBaseline />
            <Box sx={{mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography variant="h3">Sign up</Typography>
            <Box component="form" noValidate sx={{ mt: 2 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
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
                    <Button type="submit" fullWidth variant="contained">Sign Up</Button>
                    <Link variant="body2">Already have an account? Sign In</Link>
                </Stack>
            </Box>
        </Box>
        </Container>
    )
}

export default RegisterBlock;