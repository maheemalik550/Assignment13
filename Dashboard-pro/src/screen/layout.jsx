import * as React from 'react';
import TextField from '@mui/material/TextField';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { LocalConvenienceStoreOutlined } from '@mui/icons-material';
import { Link, Outlet } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));



export function Layout({ children }) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ mr: 2, ...(open && { display: 'none' }) }}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>

                </DrawerHeader>

                <Divider />
                <List>
                    {[{ label: "Dashboard", link: "Dashboard" }, {
                        label: "Calender",
                        link: "Calender"
                    }, {
                        label: "Customer",
                        link: "Customer"
                    }, {
                        label: "Customer_Details",
                        link: "Customer_Details"
                    }, {
                        label: "Reviews",
                        link: "Reviews"
                    }, {
                        label: "Order_Details",
                        link: "Order_Details"
                    }, {
                        label: "Order_list",
                        link: "Order_list"
                    }, {
                        label: "Wallet",
                        link: "Wallet"
                    }].map((text, index) => {
                        const { label, link } = text
                        return (
                            <ListItem className='color' key={label} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <Link className='style' to={link}>
                                        <ListItemText primary={label} />
                                    </Link>
                                    {/* <ListItemText primary={label} /> */}
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </List>
                <Divider />
                <List>
                    {[{
                        label: "Chat",
                        link: "chat"
                    }, {
                        label: "Food",
                        link: "food"
                    }].map((text, index) => {
                        const { label, link } = text
                        console.log(label)
                        return (
                            <ListItem className='color' key={label} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <Link className='style' to={link}>
                                        <ListItemText primary={label} />
                                    </Link>
                                    {/* <ListItemText primary={label} /> */}
                                </ListItemButton>
                            </ListItem>
                        )
                    }

                    )}
                </List>
            </Drawer>
            <Main open={open}>
                <div className='flex' >
                    <TextField sx={{ width: "1000px" }}
                        id="outlined-multiline-flexible"
                        label="Serach"
                        multiline
                        maxRows={4}
                    /> <Stack style={{ marginLeft: "30px", marginTop: "20px" }} spacing={2} direction="row">
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon color="action" />
                        </Badge>
                        <Badge badgeContent={4} color="success">
                            <MailIcon color="action" />
                        </Badge>
                    </Stack>
                </div>
                <DrawerHeader />

                <Outlet />
                <div style={{ height: "200px" }} className='flex gap-5 mt-10 '>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="100"
                            image="https://i.pinimg.com/564x/0a/3c/45/0a3c451f253d12cbed4d11ba44c87f1a.jpg"
                        />
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="https://i.pinimg.com/736x/b4/f6/93/b4f693735f0ee76a5ee919160aeb318c.jpg"
                        />
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="100"
                            image="https://i.pinimg.com/564x/c6/32/bb/c632bb705f0128eb7584ac458745b645.jpg"
                        />
                    </Card>
                </div>

                <BottomNavigation style={{ marginTop: "200px", gap: "100px" }} sx={{ width: 500 }} value={value} onChange={handleChange}>
                    <BottomNavigationAction
                        label="Recents"
                        value="recents"
                        icon={<RestoreIcon />}
                    />
                    <BottomNavigationAction
                        label="Favorites"
                        value="favorites"
                        icon={<FavoriteIcon />}
                    />
                    <BottomNavigationAction
                        label="Nearby"
                        value="nearby"
                        icon={<LocationOnIcon />}
                    />
                    <BottomNavigationAction
                        label="Recents"
                        value="recents"
                        icon={<RestoreIcon />}
                    />
                    <BottomNavigationAction
                        label="Favorites"
                        value="favorites"
                        icon={<FavoriteIcon />}
                    />
                    <BottomNavigationAction
                        label="Nearby"
                        value="nearby"
                        icon={<LocationOnIcon />}
                    />
                    <BottomNavigationAction
                        label="Recents"
                        value="recents"
                        icon={<RestoreIcon />}
                    />
                    <BottomNavigationAction
                        label="Recents"
                        value="recents"
                        icon={<RestoreIcon />}
                    />
                    <BottomNavigationAction
                        label="Favorites"
                        value="favorites"
                        icon={<FavoriteIcon />}
                    />
                    <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
                </BottomNavigation>
            </Main>
        </Box>
    );
}



