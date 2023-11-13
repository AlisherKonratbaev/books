import React from 'react';
import {CustomBtn} from "../assets/styles/main";

const FormButton = ({title, icon}: {title:string, icon:string}) => {
    const signWith = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
    }
    return <CustomBtn onClick={signWith}>
        <img src={icon} alt="icon" />
        {title}
    </CustomBtn>;
};

export default FormButton;