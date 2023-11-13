import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Card } from '../../assets/styles/main';
import Grid from '@mui/material/Unstable_Grid2';
import BooksItem from './BooksItem';
import { BookModel } from '../../models';
import DeleteDialog from './DeleteDialog';
import { useDeleteBookMutation } from '../../services/booksApi';
import { useAppSelector } from '../../hooks';
import MD5 from 'crypto-js/md5';
import EditDialog from './EditDialog';

type BooksListProps = {
    books: { book: BookModel; status: number }[];
};
const BooksList = ({ books }: BooksListProps) => {
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [id, setId] = useState<number | null>(null);
    const [editOpen, setEditOpen] = useState(false);
    const handleOpenDeleteDialog = (bookId: number) => {
        setDeleteOpen(true);
        setId(bookId);
    };
    const handleCloseDeleteDialog = () => {
        setDeleteOpen(false);
        setId(null);
    };
    const handleOpenEditDialog = (id:number) => {
        setEditOpen(true);
        setId(id);
    };
    const handleCloseEditDialog = () => {
        setEditOpen(false);
        setId(null);
    };

    const [deleteBook, {}] = useDeleteBookMutation();
    const user = useAppSelector(state => state.user.data);
    const handleDelete = async (id: number) => {
        const Key = user?.key || '';
        const headers = {
            Key,
            Sign: MD5(`DELETE/books/${id}${user?.secret || ''}`).toString(),
        };
        await deleteBook({ id, ...headers });
    };
    return (
        <>
            <Grid container spacing='24px'>
                {books.map(item => (
                    <BooksItem
                        key={item.book.id}
                        book={item.book}
                        handleOpenDeleteDialog={handleOpenDeleteDialog}
                        handleOpenEditDialog={handleOpenEditDialog}
                    />
                ))}
            </Grid>
            <DeleteDialog open={deleteOpen} onClose={handleCloseDeleteDialog} bookId={id} deleteBook={handleDelete} />
            <EditDialog open={editOpen} handleClose={handleCloseEditDialog} bookId={id} />
        </>
    );
};

export default BooksList;