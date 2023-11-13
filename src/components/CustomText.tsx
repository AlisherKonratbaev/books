import React, { HTMLInputTypeAttribute } from 'react';
import { TextInput, TextLabel } from '../assets/styles/main';
import { Box, Stack } from '@mui/material';
import { UseFormRegister } from 'react-hook-form';
import { Inputs } from './SignupForm';

type CustomTextType = {
    register: UseFormRegister<Inputs>;
    name: keyof Inputs;
    type: HTMLInputTypeAttribute;
    placeholder: string;
    label: string;
    error: boolean;
};
const CustomText = ({ register, name, type, placeholder, label, error }: CustomTextType) => {
    const checkError = () => {
        if(error) {
            return ({
                color:"#FF4D4F"
            })
        }
    }
    return (
        <Stack direction='column' justifyContent='center' alignItems='flex-start' spacing={0} width='100%'>
            <TextLabel style={checkError()} htmlFor={name}>
                {label}
            </TextLabel>
            <TextInput {...register(name)} type={type} id={name} name={name} placeholder={placeholder} />
        </Stack>
    );
};

export default CustomText;