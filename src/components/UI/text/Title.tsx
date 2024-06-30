import { FC } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.span`
    margin: 0;
    padding: 0;
    padding-bottom: 0.5rem;
    font-family: sans-serif;
    font-weight: bold;
`;

const Title: FC<{ children: string; as?: string }> = ({ children, as }) => <StyledTitle as={as}>{children}</StyledTitle>;

export default Title;
