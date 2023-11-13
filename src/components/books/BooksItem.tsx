import React from 'react';
import { Card, TooltipIconBtn } from '../../assets/styles/main';
import { Stack, Tooltip, Box, IconButton } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import deleteIcon from '../../assets/images/trash.svg';
import editIcon from '../../assets/images/edit.svg';
import { BookModel } from '../../models';

type BooksItemProps = {
    book: BookModel;
    handleOpenDeleteDialog: (bookId: number) => void;
    handleOpenEditDialog: (bookId:number) => void;
};
const BooksItem = ({ book, handleOpenDeleteDialog,handleOpenEditDialog }: BooksItemProps) => {
    const handleDeleteIconClick = () => {
        handleOpenDeleteDialog(book.id);
    };
    const handleEditIconClick = () => {
        handleOpenEditDialog(book.id)
    }
    const cardTooltip = () => {
        return (
            <Stack direction='column' justifyContent='center' alignItems='center'>
                <TooltipIconBtn
                    onClick={handleDeleteIconClick}
                    sx={{
                        borderRadius: '6px 6px 6px 0',
                        background: '#FF4D4F',
                    }}
                >
                    <img src={deleteIcon} alt='asd' />
                </TooltipIconBtn>
                <TooltipIconBtn
                    onClick={handleEditIconClick}
                    sx={{
                        borderRadius: '0 6px 6px 6px',
                        background: '#6200EE',
                    }}
                >
                    <img src={editIcon} alt='asd' />
                </TooltipIconBtn>
            </Stack>
        );
    };
    return (
        <Tooltip title={cardTooltip()} placement='right'>
            <Grid xs={4}>
                <Card>
                    <h4>
                        {book.title || 'Some title'} <br /> isbn:{book.isbn}
                    </h4>
                    <p style={{ marginBottom: '16px' }}>
                        Lorem ipsum dolor sit amet consectetur. Nulla adipiscing neque varius vestibulum magna in.
                        Tortor quisque nisl congue ut tellus sem id.
                    </p>
                    <Stack direction='row' justifyContent='space-between' alignItems='center'>
                        <p>
                            {book.author || 'Some Author'} - {book.published}year
                        </p>
                        <span>{book.pages}</span>
                    </Stack>
                </Card>
            </Grid>
        </Tooltip>
    );
};

export default BooksItem;