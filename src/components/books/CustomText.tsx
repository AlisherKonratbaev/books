import React, { HTMLInputTypeAttribute } from 'react';
import { TextInput, TextLabel } from '../../assets/styles/main';
import { Stack } from '@mui/material';

type CustomTextType = {
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    name: string;
    type: HTMLInputTypeAttribute;
    placeholder: string;
    label: string;
    error: boolean;
    value: string | number | null;
};
const CustomText = ({ handleChange, name, type, placeholder, label, error, value }: CustomTextType) => {
    const checkError = () => {
        if (error) {
            return {
                color: '#FF4D4F',
            };
        }
    };
    return (
        <Stack direction='column' justifyContent='center' alignItems='flex-start' spacing={0} width='100%'>
            <TextLabel style={checkError()} htmlFor={name}>
                {label}
            </TextLabel>
            <TextInput
                onChange={handleChange}
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                value={value ?? ""}
            />
        </Stack>
    );
};

export default CustomText;