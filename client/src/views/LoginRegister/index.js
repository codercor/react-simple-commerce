import * as React from 'react';
import { Box, Container, Grid, Switch } from '@mui/material';
import { Login, Register } from '../../components';


export default function LoginRegister() {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '100%' },
                marginTop: "2%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"

            }}
            noValidate
            autoComplete="off"
        >
            <Container>
                <Grid container >
                    <Grid item md={5}>
                        <Login />
                    </Grid>
                    <Grid item md={2}>

                    </Grid>
                    <Grid item md={5}>
                        <Register />
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}
