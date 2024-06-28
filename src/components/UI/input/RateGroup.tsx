import React, { ChangeEventHandler, Fragment } from 'react';
import styled from 'styled-components';
import { ReactComponent as BeakerIcon } from '../../../svg/beaker.svg';
import colors from '../../../global/colors';

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
        width: 1.5rem;
        height: 1.5rem;
        border: none;
        fill: ${colors.rateGroupSvgChecked};
    }

    input:checked ~ label svg {
        fill: ${colors.rateGroupSvgUnchecked};
    }

    input:checked + label svg {
        fill: ${colors.rateGroupSvgChecked};
    }

    input:focus + label {
        outline: 2px solid ${colors.focusOutline};
    }

    &:hover {
        input + label svg {
            fill: ${colors.rateGroupSvgChecked};
        }

        input:hover ~ label svg {
            fill: ${colors.rateGroupSvgUnchecked};
        }

        input:hover + label svg {
            fill: ${colors.rateGroupSvgChecked};
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
