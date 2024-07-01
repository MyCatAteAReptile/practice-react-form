import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import colors from '../../../global/colors';

type ErrorWrapperProps = {
    children: ReactNode;
    errorText: string;
};

const StiledErrorWrapper = styled.div`
    display: flex;
    position: relative;
`;

const ErrorMessage = styled.span`
    display: flex;
    position: absolute;
    top: -30px;
    right: 0;
    transform: translateY(-50%);
    width: fit-content;
    padding: 10px 15px;
    border-radius: 10px;
    background-color: ${colors.defaultBg};
    box-shadow: 0 5px 10px 0 rgba(0 0 0 / 30%);
    color: ${colors.errorMessageColor};
    font-family: serif;
    font-size: 1rem;
`;

const ErrorWrapper: FC<ErrorWrapperProps> = ({ errorText, children }) => (
    <StiledErrorWrapper>
        {children}
        {errorText && <ErrorMessage aria-live="assertive">{errorText}</ErrorMessage>}
    </StiledErrorWrapper>
);

export default ErrorWrapper;
