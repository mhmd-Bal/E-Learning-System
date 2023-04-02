import {Box, Container, Typography, Checkbox ,CssBaseline, TextField, FormControlLabel, Button, Link, Stack} from '@mui/material';
import { useNavigate } from "react-router-dom";

function LoginBlock() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleRegisterNavigation = () => {
        navigate("/register");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:3000/auth/login', {
          email: email,
          password: password
        }, {
          headers: {
            'content-type': 'application/json',
            'Accept': 'application/json',
          }
        })
          .then(response => {
            console.log(response);
            localStorage.setItem('token', response.data.authorisation.token);
            
          })
          .catch(error => {
            alert("Incorrect Crendetials!");
          });
    }

    return (
        <Container sx={{display: 'flex', justifyContent: 'center'}}>
            <CssBaseline />
            <Box sx={{maxWidth: 415, mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography variant="h3">Sign in</Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate mt={2}>
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