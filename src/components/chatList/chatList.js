import React, { useState } from 'react';
import {
    List,


    ListItemAvatar,
    Avatar,
    Divider,
    Typography
} from '@mui/material';
// import '../../styles.module.css';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import { green, lightBlue, blue, deepPurple } from '@mui/material/colors';
import MuiListItemText from '@mui/material/ListItemText';
import MuiListItem from '@mui/material/ListItem';

const theme = createTheme({

    palette: {
        primary: {
            main: blue[400],
        },
        secondary: {
            main: green[500],
        },
        background: {
            paper: '#483a7a',
        }
    },
});

const ListItem = styled(MuiListItem)({

    '&.Mui-selected': {
        backgroundColor: '#0d47a1'
    }
})

const ListItemText = styled(MuiListItemText)({

    '& .MuiListItemText-primary': {
        color: '#b3e5fc',
    },

    '& .MuiListItemText-secondary': {
        color: 'gray'
    }
})

export const ChatList = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (

        <ThemeProvider theme={theme}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start"
                    button
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="User Name"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                >
                                    {"Last message text…"}
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider component="li" />
                <ListItem alignItems="flex-start"
                    button
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemAvatar>
                        <Avatar alt="Travis Howard" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="User Name"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                >
                                    {'Last message text'}
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider component="li" />
                <ListItem alignItems="flex-start"
                    button
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="User Name"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                >
                                    {'Last message text'}
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider component="li" />
            </List>
        </ThemeProvider>
    );
}