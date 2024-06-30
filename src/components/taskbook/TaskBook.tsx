import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import TaskForm from './TaskForm';
import Task from '../../types/task';
import Tasks from './Tasks';
import { Filter } from '../../types/filter';
import TaskFilter from './TaskFilter';
import { parseFilter } from '../../utils/searchParams';
import { loadTasks, saveTasks } from '../../utils/localStorage';

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
    const [searchParams, setSearchParams] = useSearchParams();
    const [filter, setFilter] = useState<Filter>(parseFilter(searchParams));

    const onTaskCreated = (newTask: Task) => {
        if (newTask) {
            const modifiedTasks = tasks || [];
            const newTaskId = Math.max(...modifiedTasks.map((task) => task.id)) + 1;

            setTasks([...modifiedTasks, { ...newTask, id: newTaskId }]);
        }
    };

    const onTasksChanged = (newTasks: Task[]) => {
        setTasks([...newTasks]);
    };

    useEffect(() => {
        const savedTasks = loadTasks();

        if (savedTasks) {
            setTasks(savedTasks);
        }
    }, []);

    useEffect(() => {
        setSearchParams(filter);
    }, [setSearchParams, filter]);

    useEffect(() => {
        if (tasks) {
            saveTasks(tasks);
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
