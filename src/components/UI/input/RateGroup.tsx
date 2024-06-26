import React, { ChangeEventHandler } from 'react';
import styled from 'styled-components';
import { ReactComponent as BeakerIcon } from '../../../svg/beaker.svg';

type RateGroupProps = {
    values: string[]; // значения отсортированы по уменьшению
    name: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    checkedValue: string;
};

const StyledRateGroup = styled.div`
    direction: rtl;
    input {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }

    label {
        display: inline-flex;
        align-items: center;
        user-select: none;
    }

    &:hover label svg {
        fill: #bfe2ff;
    }

    &:hover label:hover svg {
        fill: #337ab7;
    }
`;

const StyledLabel = styled.label<{ $checked: boolean }>`
    svg {
        display: inline-block;
        width: 1em;
        height: 1em;
        flex-shrink: 0;
        flex-grow: 0;
        border: none;
        border-radius: 50%;
        margin-right: 0.5em;
        fill: ${(props) => (props.$checked ? '#337ab7' : '#bfe2ff')};
    }

    &:hover svg {
        fill: #337ab7;
    }

    &:hover ~ label svg {
        fill: #337ab7;
    }
`;

const RateGroup: React.FC<RateGroupProps> = ({
    values,
    name,
    onChange,
    checkedValue,
}) => (
    <StyledRateGroup>
        {values.map((value) => (
            <StyledLabel
                key={`${name}-${value}`}
                $checked={value <= checkedValue}
                aria-label={`Установить ${name} значение ${value}.`}
            >
                <input
                    type="radio"
                    id={`${name}-${value}`}
                    checked={value === checkedValue}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
                <BeakerIcon />
            </StyledLabel>
        ))}
    </StyledRateGroup>
);

export default RateGroup;
