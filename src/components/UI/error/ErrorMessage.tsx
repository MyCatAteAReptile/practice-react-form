import React, { FC } from 'react';
import styled from 'styled-components';
import colors from '../../../global/colors';

type ErrorMessageProps = {
    children: string;
};

const StyledErrorMessage = styled.span`
    display: flex;
    align-items: center;
    height: 1.5rem;
    color: ${colors.errorMessageColor};
    font-family: serif;
    font-size: 1rem;
`;

const ErrorMessage: FC<ErrorMessageProps> = ({ children }) => <StyledErrorMessage aria-live="assertive">{children}</StyledErrorMessage>;

export default ErrorMessage;
