import React, { useState } from 'react';
import styled from 'styled-components';
import Task from '../../types/task';
import colors from '../../global/colors';
import Button from '../UI/button/Button';

type TaskProps = {
    as: string;
    task: Task;
    removeTask: (task: Task) => void;
};

const borderColors = {
    '0': 'green',
    '1': 'blue',
    '2': 'red',
};

const StyledTaskCard = styled.div<{ isSolved: boolean; borderColor: string }>`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    width: 100%;
    height: 100%;
    padding: 1rem;
    border: 2px solid ${colors.taskCardBorder};
    border-radius: 10px;
    font-family: sans-serif;
    text-decoration: ${(props) => (props.isSolved ? 'line-through' : 'none')};
    opacity: ${(props) => (props.isSolved ? '0.5' : '1')};
    border-color: ${(props) => props.borderColor};
    background-color: ${(props) => (props.isSolved ? 'lightgray' : 'transparent')};
`;

const Title = styled.p`
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
    font-weight: 700;
`;

const Description = styled.p`
    margin: 0;
    padding: 0;
    overflow-y: hidden;
`;

const Wrapper = styled.div`
    display: flex;
    place-items: center;
    justify-content: space-between;
    margin-top: auto;
    gap: 0.5rem;
`;

const Label = styled.label`
    display: flex;
    place-items: center;
    gap: 0.5rem;
    margin: 0;
    padding: 0;

    input {
        margin: 0;
        padding: 0;
    }
`;

const TaskCard: React.FC<TaskProps> = ({ as, task, removeTask }) => {
    const [isSolved, setIsSolved] = useState(false);

    return (
        <StyledTaskCard as={as} isSolved={isSolved} borderColor={borderColors[task.priority]}>
            <Title>{task.title}</Title>
            <Description>{task.description}</Description>
            <Wrapper>
                <Label>
                    <input type="checkbox" checked={isSolved} onChange={() => setIsSolved((prev) => !prev)} />
                    <span>Выполнено</span>
                </Label>
                <Button
                    type="button"
                    onClick={(e) => {
                        removeTask(task);
                    }}
                >
                    Удалить
                </Button>
            </Wrapper>
        </StyledTaskCard>
    );
};

export default TaskCard;
