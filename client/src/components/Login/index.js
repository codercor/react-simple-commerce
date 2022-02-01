import React, { useState } from 'react';
import { TextField, Button, Typography, FormControl } from '@mui/material';
import service from "../../service"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserData } from "../../app/slices/userSlice"


export default function Login() {
    let dispatch = useDispatch()
    const [loginData, setLoginData] = useState({ username: "selo", password: "selo123." })
    let navigate = useNavigate();
    let handleLogin = async () => {
        if (loginData.username == "" || loginData.password == "") {
            alert("bos alan")
        }
        let response = await service.post("/auth/login", loginData)
        if (response.data.token) {
            localStorage.setItem("token", response.data.token);
            dispatch(setUserData(response.data.user))
            if (response.data.user.role == 0) {
                navigate("/userpanel")
            } else if (response.data.user.role == 1) {
                navigate("/storepanel")
            } else if (response.data.user.role == 2) {
                navigate("/adminpanel")
            }
        }
    }
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
                name="username"
                value={loginData.username}
                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                onKeyDown={(e) => {
                    if (e.key == "Enter") {
                        handleLogin()
                    }
                }}
            />
            <TextField
                required
                label="Password"
                type="password"
                name="password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                onKeyDown={(e) => {
                    if (e.key == "Enter") {
                        handleLogin()
                    }
                }}
            />
            <Button variant="outlined" sx={{
                width: "100%"
            }}
                onClick={handleLogin}
            >Login</Button>
        </div >
    );
}
