import React from 'react';
import styled from 'styled-components';
import TaskBook from '../components/taskbook/TaskBook';

const StyledMain = styled.main`
    display: flex;
    place-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;

const Main = () => (
    <StyledMain>
        <TaskBook />
    </StyledMain>
);

export default Main;
