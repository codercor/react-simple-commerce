import React from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { setUserData  as setUserDataStore } from '../../../app/slices/userSlice';
import axios from '../../../service'
export default function Profile() {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [userData, setUserData] = React.useState({
        username: user.username,
        email: user.email,
        name: user.name,
        lastName: user.lastName,
        phone: user.phone,
        address:  user.address,
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });
    }

    const handleSave = () => {
        axios.put(`/user/${user.id}`, userData)
        .then(res => {
            console.log(res);
            dispatch(setUserDataStore({
                ...user,...userData
            }))
            alert("User data updated successfully !")
        }).catch(err => {
            console.log("HATA",err);
            alert("User data updated failed !")
        });
    }

    return <Box>
        <Typography variant='h3' >
            Edit Your Profile
        </Typography>
        <Grid container sx={{padding:"20px"}} spacing={3}>
            <Grid item md={6}>
                <TextField fullWidth value={userData.name} name="name" onChange={handleChange}  label='First Name' />
            </Grid>
            <Grid item md={6}>
                <TextField fullWidth value={userData.lastName} name="lastName" onChange={handleChange}  label='Last Name' />
            </Grid>
            <Grid item md={6}>
                <TextField fullWidth value={userData.username} name="username" onChange={handleChange}  label='username' />
            </Grid>
            <Grid item md={6}>
                <TextField fullWidth value={userData.email} name="email" onChange={handleChange}  label='Email' />
            </Grid>
            <Grid item md={6}>
                <TextField fullWidth value={userData.phone} name="phone" onChange={handleChange}  label='Phone' />
            </Grid>
            <Grid item md={6}>
                <TextField fullWidth value={userData.address} name="address" onChange={handleChange}  label='Address' />
            </Grid>
            <Grid item md={12}>
                <Button fullWidth onClick={handleSave}  variant='contained' color='primary'>
                    Save
                </Button>
            </Grid>
        </Grid>
    </Box>
}
