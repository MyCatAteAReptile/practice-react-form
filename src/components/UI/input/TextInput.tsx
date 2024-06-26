import React, { ChangeEventHandler } from 'react';
import styled from 'styled-components';
import colors from '../../../global/colors';

type TextInputProps = {
    id: string;
    placeholder: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
};

const StyledTextInput = styled.input`
    border: solid 2px ${colors.inputBorder};
    outline: none;

    &:focus {
        border: solid 2px ${colors.inputBorderFocus};
    }

    &:hover {
        border: solid 2px ${colors.inputBorderHover};
    }
`;

const TextInput: React.FC<TextInputProps> = ({
    id,
    placeholder,
    value,
    onChange,
}) => (
    <StyledTextInput
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />
);

export default TextInput;
