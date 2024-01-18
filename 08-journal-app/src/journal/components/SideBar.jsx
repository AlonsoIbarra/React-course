import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { TurnedInNot } from "@mui/icons-material";

export const SideBar =({ drawerWidth })=>{
    return (
        <Box
            component="nav"
            sx={{ width:{ sm: `${drawerWidth}px`, flexShrink:{ sm:0 }}}}>
                <Drawer
                variant="permanent"
                open
                sx={{
                    display: { xs:'block'},
                    '& .MuiDrawer-paper':{
                        boxSizing: 'border-box',
                        width: { drawerWidth}
                    }
                }}>
                    <Toolbar>
                        <Typography
                        variant="h6"
                        noWrap
                        component='div'>
                            Saul Alonso
                        </Typography>
                    </Toolbar>
                    <Divider/>
                    <List>
                        {
                            ['enero','febrerp','marxo'].map( text => (
                                <ListItem key={ text } disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <TurnedInNot/>
                                            <Grid container>
                                                    <ListItemText primary={ text }/>
                                                    <ListItemText secondary={ text }/>
                                            </Grid>
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                            ))
                        }
                    </List>
                </Drawer>
        </Box>
    )
}