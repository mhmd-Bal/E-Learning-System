import { Button, Container, CssBaseline, Box, Typography, TextField, FormControlLabel, Stack, Checkbox } from "@mui/material";
import "./styles.css";

function LoginPage() {
  return (
    <Container sx={{display: 'flex', justifyContent: 'center', paddingY: 8}}>
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
                    </Stack>
                </Box>
            </Box>
        </Container>
  );
}

export default LoginPage;
