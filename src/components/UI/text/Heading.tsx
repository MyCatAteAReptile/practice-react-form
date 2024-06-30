import { FC } from 'react';
import styled from 'styled-components';

const StyledHeading = styled.span`
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
`;

const Heading: FC<{ children: string; as?: string }> = ({ children, as }) => <StyledHeading as={as}>{children}</StyledHeading>;

export default Heading;
