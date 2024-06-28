import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Task from '../../types/task';
import Button from '../UI/button/Button';
import TaskList from './TaskList';
import colors from '../../global/colors';
import Filter from '../../types/filter';
import useFilter from '../../hooks/useFilter';
import defaultTasks from '../../global/defaultTasks';

type TasksProps = {
    newTask: Task | undefined;
    filter: Filter;
};

const taskOnPageCount = 6;

const StyledTasks = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 1rem;
    border: solid 2px ${colors.tasksBorder};
    border-radius: 20px;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

const TasksButton = styled(Button)`
    grid-column: 1 / 3;
`;

const EmptyTasksMessage = styled.p`
    font-size: 2.5rem;
    opacity: 0.4;
`;

const Tasks: React.FC<TasksProps> = ({ newTask, filter }) => {
    const [tasks, setTasks] = useState<Task[]>(defaultTasks);
    const [firstTaskIndex, setFirstTaskIndex] = useState(0);
    const sortedAndSearchedPosts = useFilter(tasks, filter);

    const getTasksForRender = (tasksArray: Task[], startIndex: number, countToRender: number) => {
        const endIndex = startIndex + countToRender;
        const tasksToRender = tasksArray.slice(startIndex, endIndex);

        return tasksToRender;
    };

    const changeTasksPage = (direction: 'prev' | 'next') => {
        let nextIndex: number = 0;

        if (direction === 'prev') {
            nextIndex = firstTaskIndex - taskOnPageCount;
            nextIndex = nextIndex < 0 ? 0 : nextIndex;
        }
        if (direction === 'next') {
            nextIndex = firstTaskIndex + taskOnPageCount;
            nextIndex = nextIndex > sortedAndSearchedPosts.length + taskOnPageCount ? 0 : nextIndex;
        }

        setFirstTaskIndex(nextIndex);
    };

    const removeTask = (task: Task) => {
        setTasks(tasks.filter((p) => p.id !== task.id));
    };

    useEffect(() => {
        if (newTask) {
            setTasks((prevTasks) => [...prevTasks, newTask]);
        }
    }, [newTask]);

    return (
        <StyledTasks>
            {sortedAndSearchedPosts.length ? (
                <>
                    <TaskList tasks={getTasksForRender(sortedAndSearchedPosts, firstTaskIndex, taskOnPageCount)} removeTask={removeTask} />
                    <Wrapper>
                        <TasksButton
                            disabled={firstTaskIndex === 0}
                            type="button"
                            onClick={() => {
                                changeTasksPage('prev');
                            }}
                        >
                            Предыдущие задачи
                        </TasksButton>
                        <TasksButton
                            disabled={firstTaskIndex + taskOnPageCount >= sortedAndSearchedPosts.length}
                            type="button"
                            onClick={() => {
                                changeTasksPage('next');
                            }}
                        >
                            Следующие задачи
                        </TasksButton>
                    </Wrapper>
                </>
            ) : (
                <EmptyTasksMessage>Нет задач</EmptyTasksMessage>
            )}
        </StyledTasks>
    );
};

export default Tasks;
