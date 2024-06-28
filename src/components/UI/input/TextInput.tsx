import React, { ChangeEventHandler } from 'react';
import styled from 'styled-components';
import colors from '../../../global/colors';

type TextInputProps = {
    required?: boolean;
    id: string;
    placeholder: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
};

const StyledTextInput = styled.input`
    padding: 10px;
    border: solid 2px ${colors.inputBorder};
    outline: none;
    font-family: sans-serif;
    font-size: 1rem;
    font-weight: 400;

    &:focus {
        border: solid 2px ${colors.inputBorderFocus};
    }

    &:hover {
        border: solid 2px ${colors.inputBorderHover};
    }
`;

const TextInput: React.FC<TextInputProps> = ({ required = false, id, placeholder, value, onChange }) => (
    <StyledTextInput type="text" required={required} id={id} placeholder={placeholder} value={value} onChange={onChange} />
);

export default TextInput;
