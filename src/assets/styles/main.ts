import styled from 'styled-components';
import { Box, Typography, Input, TextField, Button, Tooltip, IconButton } from '@mui/material';
import { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Mulish, Sans-Serif;
    box-sizing: border-box;
    color:#FEFEFE;
    
    .MuiTooltip-tooltip {
        padding:0;
        margin:0 !important;
        background:transparent;
    }
    .MuiTooltip-popper {
        left:-10px !important;
    }
  }
`;

export const Main = styled(Box)`
    position: relative;
    overflow: hidden;
    min-height: 100vh;
`;
export const Rectangle = styled(Box)`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 200%;
    height: 200%;
    background-color: #333;
    transform: rotate(-45deg) translateX(-43%) translateY(-97%);
    border-radius: 30px;
    z-index: -1;
`;
export const FlexCenter = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
`;
// export const FormBox = styled(FlexCenter)`
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;
export const Form = styled.form`
    display: flex;
    width: 430px;
    padding: 48px 28px;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    background-color: #fefefe;
    border-radius: 12px;
    box-shadow: 0px 4px 32px 0px rgba(51, 51, 51, 0.04);
    z-index: 99;
`;
export const FormTitle = styled.p`
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0 0 20px 0;
    color:#151515;
`;

export const CustomBtn = styled.button`
    display: flex;
    padding: 10px 24px;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border-radius: 4px;
    border: 1px solid #151515;
    background-color: #fff;
    color: #151515
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width:100%;
    cursor:pointer;
`;

export const CustomLine = styled.hr`
    width: 100%;
    height: 1px;
    background: rgb(36, 39, 44);
    border: none;
    margin: 0;
`;
export const CustomLineText = styled.span`
    color: #24272c;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
`;
export const TextInput = styled.input`
    padding: 14px 16px;
    border-radius: 6px;
    border: 1px solid #ebebeb;
    background: #fefefe;
    min-width: -webkit-fill-available;
    box-shadow: 0px 4px 18px 0px rgba(51, 51, 51, 0.04);
    outline: none;
    color: #151515;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
`;
export const TextLabel = styled.label`
    color: #151515;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    margin-bottom: 4px;
`;

export const SubmitBtn = styled(Button)`
    padding: 10px 24px !important;
    text-align: center;
    border-radius: 4px;
    color: #fefefe;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;
    width: 100%;
    cursor: pointer;
    :hover {
        background-color: #6200ee !important;
    }
`;
export const FormText = styled.p`
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 120%;
    color: #333;
    margin:0;
`;
export const FormLink = styled(Link)`
    color: #6200ee;
    text-decoration: none;
`;

export const SearchInput = styled(TextField)`
    background-color: transparent;
    color: #fefefe;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.16px;
    outline: none;
    padding: 13px 26px;
    border: none;
    width: 300px;
    input {
        color: #fefefe;
    }
`;

export const MainTitle = styled.h2`
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;
    span {
        color: #6200ee;
    }
`;
export const MainSubtitle = styled.p`
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const Card = styled(Box)`
    padding: 32px;
    border-radius: 12px;
    border: 1px solid #ebebeb;
    background: #fefefe;
    box-shadow: 0px 4px 24px 0px rgba(51, 51, 51, 0.08);
    h4 {
        color: #151515;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin: 0;
        margin-bottom: 6px;
    }
    p {
        color: #333;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        margin: 0;
    }
    span {
        padding: 2px 12px;
        border-radius: 8.5px;
        background: #efe6fd;
        color: #9654f4;
        text-align: center;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;

export const TooltipIconBtn = styled(IconButton)`
     padding: 8px;
     borderRadius: 6px;
     boxShadow: 0px 6px 32px 0px rgba(21, 21, 21, 0.48);
`;
