import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

type DeleteDialogProps = {
    open: boolean;
    onClose: () => void;
    bookId: number | null;
    deleteBook: (id: number) => void;
};
const DeleteDialog = ({ open, onClose, bookId, deleteBook }: DeleteDialogProps) => {
    const handleSubmit = () => {
        if (bookId) {
            deleteBook(bookId);
            onClose();
        }
    };
    return (
        <Dialog open={open} onClose={onClose} maxWidth='sm'>
            <DialogTitle>Delete this book?</DialogTitle>
            <DialogContent>Once deleted, you will not be able to restore it.</DialogContent>
            <DialogActions>
                <Button variant='outlined' onClick={onClose} fullWidth>
                    Close
                </Button>
                <Button variant='contained' fullWidth onClick={handleSubmit}>
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteDialog;