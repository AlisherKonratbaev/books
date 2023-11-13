import { useAuthQuery } from '../services/authApi';
import {useEffect, useLayoutEffect} from 'react';
import { useAppSelector } from '../hooks';
import { useNavigate } from 'react-router-dom';
import env from 'react-dotenv';
import MD5 from 'crypto-js/md5';
import {Typography} from "@mui/material";

export const Auth = ({ children }: { children: JSX.Element }) => {
    const navigate = useNavigate();
    const Key = localStorage.getItem('Key') || '';
    const authHeaders = {
        Key,
        Sign: MD5(`GET/myself${env.SECRET_KEY || ''}`).toString(),
    };
    const { isLoading } = useAuthQuery(authHeaders);
    const user = useAppSelector(state => state.user.data);

    useLayoutEffect(() => {
        if (!isLoading) {
            if (!user) {
                navigate('/login');
            }
        }
    }, [isLoading]);

    if (isLoading) {
        return <Typography variant="h2" color="#000">Загрузка</Typography>;
    }

    return children;
};