import React, { ChangeEventHandler, Fragment } from 'react';
import styled from 'styled-components';
import { ReactComponent as BeakerIcon } from '../../../svg/beaker.svg';

type RateGroupProps = {
    values: string[];
    name: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    checkedValue: string;
};

const StyledRateGroup = styled.div`
    display: inline-flex;

    input {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }

    label {
        display: inline-flex;
        padding: 0 0.3rem;
        border-radius: 30%;
    }

    svg {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        border: none;
        fill: #337ab7;
    }

    input:checked ~ label svg {
        fill: #bfe2ff;
    }

    input:checked + label svg {
        fill: #337ab7;
    }

    input:focus + label {
        outline: 2px solid #bfe2ff;
    }

    &:hover {
        input + label svg {
            fill: #337ab7;
        }

        input:hover ~ label svg {
            fill: #bfe2ff;
        }

        input:hover + label svg {
            fill: #337ab7;
        }
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
            <Fragment key={`${name}-${value}`}>
                <input
                    type="radio"
                    id={`${name}-${value}`}
                    checked={value === checkedValue}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
                <label
                    htmlFor={`${name}-${value}`}
                    aria-label={`Установить ${name} значение ${value}.`}
                >
                    <BeakerIcon />
                </label>
            </Fragment>
        ))}
    </StyledRateGroup>
);

export default RateGroup;
