import React from 'react';
import {CustomLine, CustomLineText, FlexCenter} from '../assets/styles/main';

const FormLine = () => {
    return (
        <FlexCenter sx={{ gap: '15px', width:"100%", height:"40px" }}>
            <CustomLine />
            <CustomLineText>or</CustomLineText>
            <CustomLine />
        </FlexCenter>
    );
};

export default FormLine;