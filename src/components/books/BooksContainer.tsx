import React, {useState} from 'react';
import BooksList from './BooksList';
import { Stack, Typography, Box, TextField, Button } from '@mui/material';
import { FlexCenter, MainSubtitle, MainTitle, SubmitBtn, TextInput } from '../../assets/styles/main';
import AddIcon from '@mui/icons-material/Add';
import { useGetAllBooksQuery } from '../../services/booksApi';
import { useAppSelector } from '../../hooks';
import MD5 from 'crypto-js/md5';
import CreateDialog from "./CreateDialog";
import SuccessAlert from "./SuccessAlert";
import DeleteDialog from "./DeleteDialog";

const BooksContainer = () => {
    const [open, setOpen] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);

    const handleOpenCreateDialog = () => {
        setOpen(true)
    }
    const handleCloseCreateDialog = () => {
        setOpen(false)
    }

    const handleAlertOpen = () => {
        setAlertOpen(true);
    };
    const handleAlertClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlertOpen(false);
    };

    const user = useAppSelector(state => state.user.data);
    const { isLoading } = useGetAllBooksQuery({
        Key: user?.key || '',
        Sign: MD5(`GET/books${user?.secret}`).toString() || '',
    });
    const booksData = useAppSelector(state => state.books.data);

    return (
        <div>
            <Stack direction='row' justifyContent='space-between' alignItems='center' mb='13px'>
                <MainTitle>
                    You’ve got <span>{booksData?.length || 0} book</span>
                </MainTitle>
                <FlexCenter gap='24px'>
                    <TextInput placeholder='Enter your name' style={{ minWidth: 'auto' }} />
                    <SubmitBtn
                        sx={{ backgroundColor: '#6200ee' }}
                        variant='contained'
                        startIcon={<AddIcon />}
                        onClick={handleOpenCreateDialog}
                    >
                        Create a book
                    </SubmitBtn>
                </FlexCenter>
            </Stack>
            <MainSubtitle>Your task today</MainSubtitle>
            <BooksList books={booksData || []} />

            <CreateDialog open={open} handleClose={handleCloseCreateDialog} handleAlertOpen={handleAlertOpen} />
            <SuccessAlert open={alertOpen} onClose={handleAlertClose} />

        </div>
    );
};

export default BooksContainer;