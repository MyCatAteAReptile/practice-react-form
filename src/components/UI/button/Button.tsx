import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import colors from '../../../global/colors';

type ButtonProps = {
    children: string;
    type: 'button' | 'submit' | 'reset';
    onClick?: MouseEventHandler;
    className?: string;
    disabled?: boolean;
};

const StyledButton = styled.button`
    appearance: none;
    padding: 5px;
    background-color: ${colors.defaultButtonBg};
    border: solid 2px ${colors.defaultButtonBorder};
    border-radius: 5px;
    font-size: 0.9rem;
    font-weight: 400;

    &:hover {
        opacity: 0.9;
    }

    &:active {
        opacity: 0.8;
    }

    &:disabled {
        opacity: 0.3;
    }
`;

const Button: React.FC<ButtonProps> = ({
    children,
    type,
    onClick,
    className,
    disabled = false,
}) => (
    <StyledButton
        disabled={disabled}
        className={className}
        type={type}
        onClick={onClick}
    >
        {children}
    </StyledButton>
);

export default Button;
