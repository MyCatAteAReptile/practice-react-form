import React, { ChangeEventHandler } from 'react';
import styled from 'styled-components';
import colors from '../../../global/colors';

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
    border: solid 2px ${colors.inputBorder};
    outline: none;
    resize: none;
    padding: 10px;
    overflow-y: scroll;
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

const TextArea: React.FC<TextAreaInputProps> = ({
    id,
    placeholder,
    value,
    onChange,
    rows = 10,
    cols = 50,
}) => (
    <StyledTextArea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        cols={cols}
    />
);

export default TextArea;
