import { useEffect, useState } from 'react';
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
    height: 90vh;
    grid-template-columns: 30% 60%;
    column-gap: 10%;
    align-items: center;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const TaskBook = () => {
    const [tasks, setTasks] = useState<Task[]>();
    const [filter, setFilter] = useState<Filter>({ query: '', sort: 'default' });
    const onTaskCreated = (newTask: Task) => {
        if (newTask) {
            const modifiedTasks = tasks || [];
            const newTaskId = (modifiedTasks[modifiedTasks.length - 1] && modifiedTasks[modifiedTasks.length - 1].id + 1) || 0;

            setTasks([...modifiedTasks, { ...newTask, id: newTaskId }]);
        }
    };

    const onTasksChanged = (newTasks: Task[]) => {
        setTasks([...newTasks]);
    };

    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');

        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    useEffect(() => {
        if (tasks) {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }, [tasks]);

    return (
        <StyledTaskBook>
            <Wrapper>
                <TaskFilter filter={filter} setFilter={setFilter} />
                <TaskForm onTaskCreated={onTaskCreated} />
            </Wrapper>
            <Tasks tasks={tasks} onTasksChanged={onTasksChanged} filter={filter} />
        </StyledTaskBook>
    );
};

export default TaskBook;
