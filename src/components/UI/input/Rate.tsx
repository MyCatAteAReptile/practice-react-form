import React, { ChangeEventHandler } from 'react';
import styled from 'styled-components';
import { ReactComponent as BeakerIcon } from '../../../svg/beaker.svg';

type RateProps = {
    value: string;
    name: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    checked: boolean;
};

const StyledRate = styled.input`
    position: absolute;
    z-index: -1;
    opacity: 0;

    & + label {
        display: inline-flex;
        align-items: center;
        user-select: none;
    }

    & + label svg {
        display: inline-block;
        width: 1em;
        height: 1em;
        flex-shrink: 0;
        flex-grow: 0;
        border: none;
        border-radius: 50%;
        margin-right: 0.5em;
    }

    &:checked ~ label svg {
        fill: #337ab7;
    }
    &:hover label svg {
        fill: #bfe2ff;
    }
    &:hover ~ label svg {
        fill: #337ab7;
    }
`;

const Rate: React.FC<RateProps> = ({ value, name, onChange, checked }) => (
    <>
        <StyledRate
            type="radio"
            checked={checked}
            value={value}
            id={`${name}-${value}`}
            name={name}
            onChange={onChange}
        />
        <label
            htmlFor={`${name}-${[value]}`}
            aria-label={`Установить ${name} значение ${value}.`}
        >
            <BeakerIcon />
        </label>
    </>
);

export default Rate;
