import React, { ChangeEventHandler } from 'react';
import styled from 'styled-components';
import borders from '../../../global/borders';

type TextInputProps = {
    required?: boolean;
    id: string;
    placeholder: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
};

const StyledTextInput = styled.input`
    padding: 10px;
    border: ${borders.border};
    outline: none;
    font-family: sans-serif;
    font-size: 1rem;
    font-weight: 400;

    &:focus {
        border: ${borders.borderFocus};
    }

    &:hover {
        border: ${borders.borderHover};
    }
`;

const TextInput: React.FC<TextInputProps> = ({ required = false, id, placeholder, value, onChange }) => (
    <StyledTextInput type="text" required={required} id={id} placeholder={placeholder} value={value} onChange={onChange} />
);

export default TextInput;
