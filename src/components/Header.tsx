import React from 'react';
import { Container, Box, Stack, TextField, InputAdornment, Input, FormControl } from '@mui/material';
import logo from '../assets/images/logo.svg';
import searchIcon from '../assets/images/search.svg';
import notifyIcon from '../assets/images/notification.svg';
import userImg from '../assets/images/user-image.png';
import { SearchInput } from '../assets/styles/main';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Header = () => {
    return (
        <header style={{ padding: '18px 0' }}>
            <Container maxWidth='lg'>
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Stack direction='row' alignItems='center'>
                        <img src={logo} alt='logo' style={{ marginRight: '20px' }} />
                        <SearchInput
                            placeholder='Search for any training you want'
                            variant='outlined'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <img src={searchIcon} alt='search' />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Stack>
                    <Stack direction='row' alignItems='center' gap='24px'>
                        <img src={notifyIcon} alt='notifyIcon' />
                        <img src={userImg} alt='userImg' />
                    </Stack>
                </Stack>
            </Container>
        </header>
    );
};

export default Header;