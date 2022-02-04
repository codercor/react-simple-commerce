import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Grid, List, ListItem, ListItemButton } from '@mui/material';
import { useNavigate } from 'react-router-dom'


export default function Wrapper() {
  const navigate = useNavigate()
  const [links, setLinks] = useState([
    {
      title: "Profile",
      to: "/"
    },
    {
      title: "My Orders",
      to: "/my-orders"
    },
    {
      title: "My Cart",
      to: "/my-cart"
    },
    {
      title: "Refund Requests",
      to: "/refund-requests"
    },
    {
      title: "Settings",
      to: "/settings"
    },
  ]);
  return <div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <List>
            {links.map((link) => <ListItem key={link.title}>
              <ListItemButton onClick={() => navigate("/userpanel" + link.to)}>{link.title}</ListItemButton>
            </ListItem>)}
          </List>
        </Grid>
        <Grid item xs={10}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>

  </div>;
}
