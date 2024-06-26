import { ChangeEventHandler, FC } from 'react';
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
    box-sizing: border-box;
    padding: 10px;
    border: ${borders.border};
    border-radius: 8px;
    outline: none;
    font-family: sans-serif;
    font-size: 1rem;
    font-weight: 400;
    width: 100%;

    &:focus {
        border: ${borders.borderFocus};
    }

    &:hover {
        border: ${borders.borderHover};
    }
`;

const TextInput: FC<TextInputProps> = ({ required = false, id, placeholder, value, onChange }) => (
    <StyledTextInput type="text" required={required} id={id} placeholder={placeholder} value={value} onChange={onChange} />
);

export default TextInput;
