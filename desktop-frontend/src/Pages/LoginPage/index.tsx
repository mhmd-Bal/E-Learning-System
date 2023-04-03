import { Button, Container, CssBaseline, Box, Typography, TextField, FormControlLabel, Stack, Checkbox } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import axios from "axios";

function LoginPage() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login_failed, setLogin_failed] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        axios.post('http://127.0.0.1:8000/auth/login', {
            email: email,
            password: password
        }, {
          headers: {
            'content-type': 'application/json',
            'Accept': 'application/json'
          }
        })
          .then(response => {
            if(response.data.role == "admin") {
                navigate("/admin");
            }else{
                setLogin_failed(true);
            }
          })
          .catch(error => {
            console.log(error);
          });
    }

  return (
    <div className="Whole-container">
        <Container sx={{display: 'flex', justifyContent: 'center', paddingY: 8}}>
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
                        onChange={handleEmailChange}
                        autoFocus
                        error={login_failed}
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
                        onChange={handlePasswordChange}
                        helperText={login_failed ? "Wrong Credentials!" : ""}
                        error={login_failed}
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
    </div>
  );
}

export default LoginPage;
