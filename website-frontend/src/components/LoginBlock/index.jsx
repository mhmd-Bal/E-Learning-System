import {Box, Container, Typography, Checkbox ,CssBaseline, TextField, FormControlLabel, Button, Link, Stack} from '@mui/material';

function LoginBlock() {

    return (
        <Container>
            <CssBaseline />
            <Box sx={{mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography variant="h3">Sign in</Typography>
            <Box component="form" noValidate sx={{ mt: 2 }}>
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
                    <Link href="#" variant="body2">Don't have an account? Sign Up</Link>
                </Stack>
            </Box>
        </Box>
        </Container>
    )
}

export default LoginBlock;