import { FC, useState } from 'react';
import styled from 'styled-components';
import Task from '../../types/task';
import Button from '../UI/button/Button';
import TaskList from './TaskList';
import { Filter } from '../../types/filter';
import useFilter from '../../hooks/useFilter';
import borders from '../../global/borders';

type TasksProps = {
    tasks: Task[] | undefined;
    filter: Filter;
    onTasksChanged: (newTasks: Task[]) => void;
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
    border: ${borders.border};
    border-radius: 20px;
    box-shadow: 0 5px 10px 0 rgba(0 0 0 / 50%);
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

const Tasks: FC<TasksProps> = ({ tasks = [], onTasksChanged, filter }) => {
    const [pageNumber, setPageNumber] = useState(0);
    const sortedAndSearchedPosts = useFilter(tasks, filter);

    const getTasksForRender = (tasksArray: Task[]) => {
        const startIndex = pageNumber * taskOnPageCount;
        const endIndex = startIndex + taskOnPageCount;
        const tasksToRender = tasksArray.slice(startIndex, endIndex);

        return tasksToRender;
    };

    const changeTasksPage = (direction: 'prev' | 'next') => {
        if (direction === 'prev') setPageNumber(pageNumber - 1);
        if (direction === 'next') setPageNumber(pageNumber + 1);
    };

    const removeTask = (task: Task) => {
        onTasksChanged(tasks.filter((p) => p.id !== task.id));
    };

    const changeTaskStatus = (task: Task, isSolved: boolean) => {
        const taskArray = [...tasks];
        const updatedTaskId = taskArray.findIndex((p) => p.id === task.id);
        if (updatedTaskId !== -1) {
            taskArray[updatedTaskId].isSolved = isSolved;
            onTasksChanged(taskArray);
        }
    };

    return (
        <StyledTasks>
            {sortedAndSearchedPosts.length ? (
                <>
                    <TaskList tasks={getTasksForRender(sortedAndSearchedPosts)} removeTask={removeTask} changeTaskStatus={changeTaskStatus} />
                    <Wrapper>
                        <TasksButton
                            disabled={pageNumber === 0}
                            type="button"
                            onClick={() => {
                                changeTasksPage('prev');
                            }}
                        >
                            Предыдущие задачи
                        </TasksButton>
                        <TasksButton
                            disabled={(pageNumber + 1) * taskOnPageCount >= sortedAndSearchedPosts.length}
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
