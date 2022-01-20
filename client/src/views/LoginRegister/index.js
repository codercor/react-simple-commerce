import * as React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function LoginRegister() {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '100%' },
                height: "80vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"

            }}
            noValidate
            autoComplete="off"
        >
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <TextField
                    required
                    id="outlined-required"
                    label="Username"
                />
                <TextField
                    required
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                />
                <Button variant="outlined" sx={{
                    width: "100%"
                }}>Login</Button>
                <Typography mt={2}>
                    Do not have an account yet? <Link to="/register">Click here!</Link>
                </Typography>
            </div>
        </Box>
    );
}
