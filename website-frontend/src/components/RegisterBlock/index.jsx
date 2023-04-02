import {Box, Container, Typography, Checkbox ,CssBaseline, TextField, FormControlLabel, Button, Link, Stack} from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";

function RegisterBlock() {
    
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [passworderror, setPasswordError] = useState('');
    const [emailerror, setEmailerror] = useState('');
    
    
    const handleLoginNavigation = () => {
        navigate("/login");
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    
    const handleEmailChange = (e) => {
        let value = e.target.value
        setEmail(value);
        setEmailerror('');
        let validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!value.match(validRegex)){
            setEmailerror("This is not a valid Email Address");
        }
    };

    const handlePasswordChange = (e) => {
        let value = e.target.value
        setPassword(value);
        setPasswordError('');

        if (value.length < 8 || !/[A-Z]/.test(value) || !/\d/.test(value) ||
            !/[!@#$%^&*()_+={}\[\]:;<>?,./~\-]/.test(value)) {
            setPasswordError(
                'Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one symbol'
            );
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(emailerror == "" && passworderror == ""){
            axios.post('http://127.0.0.1:8000/auth/register', {
                username: username,
                email: email,
                password: password
            }, {
              headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
              }
            })
              .then(response => {
                console.log(response);
                navigate('/login');
              })
              .catch(error => {
                console.log(error);
              });
        }
    }
    

    return (
        <Container sx={{display: 'flex', justifyContent: 'center'}}>
            <CssBaseline />
            <Box sx={{maxWidth: 415, mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography variant="h3">Sign up</Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate mt={2}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        onChange={handleUsernameChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={handleEmailChange}
                        error={emailerror ? true : false}
                        helperText={emailerror ? emailerror : ''}
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
                        error={passworderror ? true : false}
                        helperText={passworderror ? passworderror : ''}
                    />
                    <Stack direction="column" spacing={3} mt={3}>
                        <Button type="submit" fullWidth variant="contained">Sign Up</Button>
                        <Link variant="body2" onClick={handleLoginNavigation} sx={{cursor: 'pointer'}}>Already have an account? Sign In</Link>
                    </Stack>
                </Box>
            </Box>
        </Container>
    )
}

export default RegisterBlock;