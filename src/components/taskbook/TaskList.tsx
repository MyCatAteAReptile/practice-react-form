import React from 'react';
import styled from 'styled-components';
import Task from '../../types/task';
import TaskCard from './TaskCard';

type TaskListProps = {
    tasks: Task[];
    cols?: number;
    rows?: number;
    removeTask: (task: Task) => void;
};

const StyledTaskList = styled.ul<{ cols: number; rows: number }>`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    padding-bottom: 1rem;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(${(props) => props.cols}, 1fr);
    grid-template-rows: ${(props) => `repeat(${props.rows}, ${90 / props.rows}%)`};
    gap: 2%;
    overflow-y: hidden;
`;

const TaskList: React.FC<TaskListProps> = ({ tasks, cols = 2, rows = 3, removeTask }) => (
    <StyledTaskList cols={cols} rows={rows}>
        {tasks.map((task) => (
            <TaskCard key={`taskcard-${task.id}`} as="li" task={task} removeTask={removeTask} />
        ))}
    </StyledTaskList>
);

export default TaskList;
