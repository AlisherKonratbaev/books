import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Alert, Snackbar } from '@mui/material';
import * as yup from 'yup';
import { Controller, useForm, FieldErrors } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomText from './CustomText';
import { Form, SubmitBtn } from '../../assets/styles/main';
import { useCreateBookMutation } from '../../services/booksApi';
import MD5 from 'crypto-js/md5';
import { useAppSelector } from '../../hooks';
import { bookInputsConfig, bookSchema, Inputs } from '../../constants/configs';


type CreateDialogProps = {
    open: boolean;
    handleClose: () => void;
    handleAlertOpen: () => void;
};
const CreateDialog = ({ open, handleClose, handleAlertOpen }: CreateDialogProps) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<Inputs>({
        resolver: yupResolver(bookSchema),
    });
    const [createBook, { data: result, isError, error, isSuccess }] = useCreateBookMutation();
    const user = useAppSelector(state => state.user.data);
    const handleCreate = async (data: Inputs) => {
        const Key = user?.key || '';
        const headers = {
            Key,
            Sign: MD5(`POST/books${JSON.stringify(data)}${user?.secret || ''}`).toString(),
        };
        await createBook({ ...data, ...headers });
    };
    useEffect(() => {
        if (isError) {
            setError('isbn', { message: 'Book with this isbn already exists' });
        }
    }, [isError]);

    useEffect(() => {
        if (isSuccess) {
            handleAlertOpen();
            handleClose();
        }
    }, [result]);

    const renderInputs = bookInputsConfig.map(({ name, label, placeholder, inputType }) => (
        <Controller
            key={name}
            name={name as keyof Inputs}
            control={control}
            render={({ field: { onChange, value } }) => (
                <CustomText
                    name={name as keyof Inputs}
                    type={inputType}
                    value={value}
                    placeholder={placeholder}
                    label={`${label} ${
                        errors[name as keyof FieldErrors<Inputs>]?.message
                            ? errors[name as keyof FieldErrors<Inputs>]?.message
                            : ''
                    }`}
                    error={errors[name as keyof FieldErrors<Inputs>] ? true : false}
                    handleChange={event => {
                        onChange(event);
                    }}
                />
            )}
        />
    ));

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Create a book</DialogTitle>
            <DialogContent>
                <Form style={{ padding: '0' }} onSubmit={handleSubmit(handleCreate)}>
                    {renderInputs}
                    <DialogActions sx={{ width: '100%' }}>
                        <Button variant='outlined' onClick={handleClose} fullWidth>
                            Close
                        </Button>
                        <SubmitBtn variant='contained' type='submit' sx={{ backgroundColor: '#6200ee' }} fullWidth>
                            Submit
                        </SubmitBtn>
                    </DialogActions>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default CreateDialog;