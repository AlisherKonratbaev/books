import React, { useEffect } from 'react';
import { FlexCenter, Form, FormLink, FormText, FormTitle, SubmitBtn } from '../assets/styles/main';
import FormButton from './FormButton';
import googleIcon from '../assets/images/google.svg';
import facebookIcon from '../assets/images/facebook.svg';
import FormLine from './FormLine';
import CustomText from './CustomText';
import env from 'react-dotenv';
import MD5 from 'crypto-js/md5';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useAuthQuery, useSignupMutation } from '../services/authApi';
import { useAppSelector } from '../hooks';

const loginSchema = yup
    .object()
    .shape({
        name: yup.string().min(3, 'Минимальное значения 3 символов').required('Обязательно к заполнению'),
        email: yup.string().email('Неверный формат Email').required('Обязательно к заполнению'),
        username: yup.string().min(3, 'Минимальное значения 3 символов').required('Обязательно к заполнению'),
    })
    .required();

export type Inputs = yup.InferType<typeof loginSchema>;

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: yupResolver(loginSchema),
    });
    const navigate = useNavigate();
    const handleLogin = async (data: Inputs) => {
        localStorage.setItem("Key", data.username);
        navigate("/")
    };
    return (
        <FlexCenter sx={{ minHeight: '100vh', padding: '10px 0' }}>
            <Form onSubmit={handleSubmit(handleLogin)}>
                <FormTitle>Login</FormTitle>
                <FormButton title='Continue with Google' icon={googleIcon} />
                <FormButton title='Continue with Facebook' icon={facebookIcon} />
                <FormLine />
                <CustomText
                    register={register}
                    name='name'
                    type='text'
                    placeholder='Enter your name'
                    label='Your name'
                    error={errors.name ? true : false}
                />
                <CustomText
                    register={register}
                    name='email'
                    type='text'
                    placeholder='Enter your email'
                    label='Your email'
                    error={errors.email ? true : false}
                />
                <CustomText
                    register={register}
                    name='username'
                    type='text'
                    placeholder='Enter your username'
                    label='Your username'
                    error={errors.username ? true : false}
                />
                <SubmitBtn variant='contained' type='submit' sx={{ backgroundColor: '#6200ee' }}>
                    Button
                </SubmitBtn>
                <FormText>
                    Already signed up? <FormLink to='/signup'>Go to sign up.</FormLink>
                </FormText>
            </Form>
        </FlexCenter>
    );
};

export default LoginForm;