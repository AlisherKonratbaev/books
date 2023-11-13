import React, { useEffect } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import env from 'react-dotenv';
import { FlexCenter, FormTitle, Form, SubmitBtn, FormText, FormLink } from '../assets/styles/main';
import FormButton from './FormButton';
import googleIcon from '../assets/images/google.svg';
import facebookIcon from '../assets/images/facebook.svg';
import FormLine from './FormLine';
import CustomText from './CustomText';
import { useSignupMutation } from '../services/authApi';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useNavigate } from 'react-router-dom';

const signupSchema = yup
    .object()
    .shape({
        name: yup.string().min(3, 'Минимальное значения 3 символов').required('Обязательно к заполнению'),
        email: yup.string().email('Неверный формат Email').required('Обязательно к заполнению'),
        username: yup.string().min(3, 'Минимальное значения 3 символов').required('Обязательно к заполнению'),
    })
    .required();

export type Inputs = yup.InferType<typeof signupSchema>;

const SignupForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<Inputs>({
        resolver: yupResolver(signupSchema),
    });
    const navigate = useNavigate();
    const [signup, { data: result, error }] = useSignupMutation();

    const handleSignup = async (data: Inputs) => {
        const reqData = { ...data, key: data.username, secret: env.SECRET_KEY || '' };
        await signup(reqData);
    };
    useEffect(() => {
        if (result) {
            localStorage.clear();
            localStorage.setItem('Key', result.data?.key || '');
            navigate('/');
        }
    }, [result]);

    useEffect(() => {
        if (error) setError('username', { message: 'Пользователь уже существует' });
    }, [error]);

    return (
        <FlexCenter sx={{ minHeight: '100vh', padding: '10px 0' }}>
            <Form onSubmit={handleSubmit(handleSignup)}>
                <FormTitle>Sign up</FormTitle>
                <FormButton title='Continue with Google' icon={googleIcon} />
                <FormButton title='Continue with Facebook' icon={facebookIcon} />
                <FormLine />
                <CustomText
                    register={register}
                    name='name'
                    type='text'
                    placeholder='Enter your name'
                    label={`Your name ${errors.name?.message ? '(' + errors.name?.message + ')' : ''}`}
                    error={errors.name ? true : false}
                />
                <CustomText
                    register={register}
                    name='email'
                    type='text'
                    placeholder='Enter your email'
                    label={`Your email ${errors.email?.message ? '(' + errors.email?.message + ')' : ''}`}
                    error={errors.email ? true : false}
                />
                <CustomText
                    register={register}
                    name='username'
                    type='text'
                    placeholder='Enter your username'
                    label={`Your username ${errors.username?.message ? '(' + errors.username?.message + ')' : ''}`}
                    error={errors.username ? true : false}
                />
                <SubmitBtn type='submit' variant='contained' sx={{ backgroundColor: '#6200ee' }}>
                    Button
                </SubmitBtn>
                <FormText>
                    Already signed up? <FormLink to='/login'>Go to sign in.</FormLink>
                </FormText>
            </Form>
        </FlexCenter>
    );
};

export default SignupForm;