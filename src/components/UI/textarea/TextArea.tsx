import { ChangeEventHandler, FC } from 'react';
import styled from 'styled-components';
import borders from '../../../global/borders';

type TextAreaInputProps = {
    id: string;
    placeholder: string;
    value: string;
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
    rows?: number;
    cols?: number;
};

const StyledTextArea = styled.textarea`
    box-sizing: border-box;
    border: ${borders.border};
    border-radius: 8px;
    outline: none;
    resize: none;
    padding: 10px;
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

const TextArea: FC<TextAreaInputProps> = ({ id, placeholder, value, onChange, rows = 5, cols = 50 }) => (
    <StyledTextArea id={id} placeholder={placeholder} value={value} onChange={onChange} rows={rows} cols={cols} />
);

export default TextArea;
