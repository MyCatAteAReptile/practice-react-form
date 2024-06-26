import React, { ChangeEventHandler } from 'react';
import styled from 'styled-components';

type RadioProps = {
    id: string;
    value: string;
    name: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    labelText: string;
    checked: boolean;
};

const StyledInput = styled.input`
    position: absolute;
    z-index: -1;
    opacity: 0;
    & + label {
        display: inline-flex;
        align-items: center;
        user-select: none;
    }
    & + label::before {
        content: '';
        display: inline-block;
        width: 1em;
        height: 1em;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid #adb5bd;
        border-radius: 50%;
        margin-right: 0.5em;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
    }

    &:not(:disabled):not(:checked) + label:hover::before {
        border-color: #b3d7ff;
    }

    &:not(:disabled):active + label::before {
        background-color: #b3d7ff;
        border-color: #b3d7ff;
    }

    &:focus + label::before {
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    &:focus:not(:checked) + label::before {
        border-color: #80bdff;
    }

    &:checked + label::before {
        border-color: #0b76ef;
        background-color: #0b76ef;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
    }

    &:disabled + label::before {
        background-color: #e9ecef;
    }
`;

const Radio: React.FC<RadioProps> = ({
    id,
    value,
    name,
    onChange,
    labelText,
    checked,
}) => (
    <>
        <StyledInput
            checked={checked}
            type="radio"
            id={id}
            value={value}
            name={name}
            onChange={onChange}
        />
        <label htmlFor={`${name}-${[value]}`}>{labelText}</label>
    </>
);

export default Radio;
