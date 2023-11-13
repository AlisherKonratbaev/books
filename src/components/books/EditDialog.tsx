import React, { useEffect } from 'react';
import { Controller, FieldErrors, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEditBookMutation } from '../../services/booksApi';
import { useAppSelector } from '../../hooks';
import MD5 from 'crypto-js/md5';
import CustomText from './CustomText';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, SelectChangeEvent } from '@mui/material';
import { Form, SubmitBtn } from '../../assets/styles/main';
import * as yup from 'yup';
import CustomSelect from './CustomSelect';
// import { bookInputsConfig, bookSchema, Inputs } from '../../constants/configs';

export const editBookInputsConfig = {
    name: 'status',
    placeholder: 'Enter your status',
    label: 'status',
    inputType: 'select',
    optionValues: [
        { status: 0, value: 'New' },
        { status: 1, value: 'Reading' },
        { status: 2, value: 'Finished' },
    ],
};
export const editBookSchema = yup
    .object()
    .shape({
        status: yup.string().required().default(''),
    })
    .required();
export type Inputs = yup.InferType<typeof editBookSchema>;
type EditDialogProps = {
    open: boolean;
    handleClose: () => void;
    bookId: number | null;
};
const EditDialog = ({ open, handleClose, bookId }: EditDialogProps) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        setError,
        setValue,
    } = useForm<Inputs>({
        resolver: yupResolver(editBookSchema),
    });
    const books = useAppSelector(state => state.books.data);
    const currentBook = books?.find(item => item.book.id === bookId);

    useEffect(() => {
        if (currentBook) {
            setValue('status', currentBook.status.toString());
        }
    }, [currentBook]);
    const [editBook, { data: result, isError, error, isSuccess }] = useEditBookMutation();
    const user = useAppSelector(state => state.user.data);
    const handleEdit = async (data: Inputs) => {
        const Key = user?.key || '';
        const headers = {
            Key,
            Sign: MD5(
                `PATCH/books/${bookId}${JSON.stringify({status:+data.status})}${user?.secret || ''}`
            ).toString(),
        };
        await editBook({id:currentBook?.book.id || 0, status: +data.status, ...headers });
        handleClose();
    };

    // useEffect(() => {
    //     if (isError) {
    //         setError('isbn', { message: 'Book with this isbn already exists' });
    //     }
    // }, [isError]);

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Change Status</DialogTitle>
            <DialogContent>
                <p>Current Status: {currentBook?.status}</p>
                <Form style={{ padding: '20px 0 0 0' }} onSubmit={handleSubmit(handleEdit)}>
                    <Controller
                        key={editBookInputsConfig.name}
                        name={editBookInputsConfig.name as keyof Inputs}
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <CustomSelect
                                name={editBookInputsConfig.name as keyof Inputs}
                                value={value}
                                book={currentBook}
                                selectOptions={editBookInputsConfig.optionValues}
                                placeholder={editBookInputsConfig.placeholder}
                                label={`${editBookInputsConfig.label} ${
                                    errors[editBookInputsConfig.name as keyof FieldErrors<Inputs>]?.message
                                        ? errors[editBookInputsConfig.name as keyof FieldErrors<Inputs>]?.message
                                        : ''
                                }`}
                                error={!!errors[editBookInputsConfig.name as keyof FieldErrors<Inputs>]}
                                handleChange={(event: SelectChangeEvent) => {
                                    onChange(event);
                                }}
                            />
                        )}
                    />

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

export default EditDialog;