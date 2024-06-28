import { useState } from 'react';
import styled from 'styled-components';
import TaskForm from './TaskForm';
import Task from '../../types/task';
import Tasks from './Tasks';
import Filter from '../../types/filter';
import TaskFilter from './TaskFilter';

const StyledTaskBook = styled.div`
    box-sizing: border-box;
    display: grid;
    width: 90vw;
    height: 80vh;
    grid-template-columns: 30% 60%;
    column-gap: 10%;
    align-items: center;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const TaskBook = () => {
    const [task, setTask] = useState<Task | undefined>();
    const [filter, setFilter] = useState<Filter>({ query: '', sort: 'default' });
    const onTaskCreated = (newTask: Task | undefined) => {
        if (newTask) {
            setTask(newTask);
        }
    };

    return (
        <StyledTaskBook>
            <Wrapper>
                <TaskFilter filter={filter} setFilter={setFilter} />
                <TaskForm onTaskCreated={onTaskCreated} />
            </Wrapper>
            <Tasks newTask={task} filter={filter} />
        </StyledTaskBook>
    );
};

export default TaskBook;
