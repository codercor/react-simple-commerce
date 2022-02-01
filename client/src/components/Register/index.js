import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Register() {
    const [registerData, setRegisterData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
        lastName: "",
        number: "",
        address: ""
    });
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <TextField
                required
                label="Username"
                name='username'
                value={registerData.username}
                onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
            />
            <TextField
                required
                label="E-mail"
                type="email"
                name='email'
                value={registerData.email}
                onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
            />
            <TextField
                required
                label="Password"
                type="password"
                name='password'
                value={registerData.password}
            />
            <TextField
                required
                label="Confirm Password"
                type="password"
                name='confirmPassword'
                value={registerData.confirmPassword}
            />
            <TextField
                required
                label="Name"
                name='name'
                value={registerData.name}
            />
            <TextField
                required
                label="LastName"
                name='lastName'
                value={registerData.lastName}
            />
            <TextField
                label="Number"
                type="number"
                name='number'
                value={registerData.number}
            />
            <TextField
                label="Address"
                name='address'
                value={registerData.address}
            />
            <Button variant="outlined" sx={{
                width: "100%"
            }}>Register</Button>
        </div>
    );
}
