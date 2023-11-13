import React from 'react';
import {Container} from "@mui/material";
import BooksContainer from "../components/books/BooksContainer";

const Main = () => {
    return (
        <Container maxWidth="lg">
            <BooksContainer />
        </Container>
    );
};

export default Main;