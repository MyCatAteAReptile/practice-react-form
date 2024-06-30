import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import colors from '../../../global/colors';
import borders from '../../../global/borders';

type ButtonProps = {
    children: string;
    type: 'button' | 'submit' | 'reset';
    onClick?: MouseEventHandler;
    className?: string;
    disabled?: boolean;
};

const StyledButton = styled.button`
    appearance: none;
    outline: none;
    padding: 5px;
    background-color: ${colors.defaultButtonBg};
    border: ${borders.border};
    border-radius: 5px;
    font-size: 0.9rem;
    font-weight: 400;
    color: ${colors.altTextColor};

    &:hover {
        opacity: 0.9;
    }

    &:focus {
        border: ${borders.borderFocus};
    }

    &:active {
        opacity: 0.8;
    }

    &:disabled {
        opacity: 0.3;
    }
`;

const Button: React.FC<ButtonProps> = ({ children, type, onClick, className, disabled = false }) => (
    <StyledButton disabled={disabled} className={className} type={type} onClick={onClick}>
        {children}
    </StyledButton>
);

export default Button;
