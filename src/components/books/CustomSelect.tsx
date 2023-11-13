import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { BookModel } from '../../models';

type CustomSelectProps = {
    name: string;
    value: string;
    selectOptions: { status: number; value: string }[];
    placeholder: string;
    label: string;
    error: boolean;
    handleChange: (e: SelectChangeEvent) => void;
    book: { book: BookModel; status: number } | undefined;
};
const CustomSelect = ({ name, value, selectOptions, label, error, handleChange, book }: CustomSelectProps) => {
    return (
        <FormControl fullWidth>
            <InputLabel id={name}>{label}</InputLabel>
            <Select labelId={name} value={value ?? ""} label={label} onChange={handleChange}>
                {selectOptions.map(item => (
                    <MenuItem key={item.status} value={item.status} defaultValue={book?.status}>
                        {item.value}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default CustomSelect;