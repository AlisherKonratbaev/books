import React from 'react';
import { Alert, Snackbar } from '@mui/material';

type SuccessAlertProps = {
    open: boolean;
    onClose: () => void;
};
const SuccessAlert = ({ open, onClose }:SuccessAlertProps) => {
    return (
        <Snackbar open={open} autoHideDuration={4000} onClose={onClose}>
            <Alert onClose={onClose} variant='filled' severity='success'>
                The book was created successfully
            </Alert>
        </Snackbar>
    );
};

export default SuccessAlert;