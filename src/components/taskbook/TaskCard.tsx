import { FC } from 'react';
import styled from 'styled-components';
import Task from '../../types/task';
import colors from '../../global/colors';
import Button from '../UI/button/Button';
import borders from '../../global/borders';

type TaskProps = {
    as: string;
    task: Task;
    removeTask: (task: Task) => void;
    changeTaskStatus: (task: Task, isSolved: boolean) => void;
};

const borderColors = {
    '0': colors.borderCardLow,
    '1': colors.borderCardMedium,
    '2': colors.borderCardHigh,
};

const StyledTaskCard = styled.div<{ $isSolved: boolean; $borderColor: string }>`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    width: 100%;
    height: 100%;
    padding: 1rem;
    border: ${borders.border};
    border-radius: 10px;
    font-family: sans-serif;
    text-decoration: ${(props) => (props.$isSolved ? 'line-through' : 'none')};
    opacity: ${(props) => (props.$isSolved ? '0.5' : '1')};
    border-color: ${(props) => props.$borderColor};
    background-color: ${(props) => (props.$isSolved ? 'lightgray' : 'transparent')};
    overflow: hidden;
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
    overflow: hidden;
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
    place-items: baseline;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
`;

const CheckBox = styled.input`
    margin: 0;
    padding: 0;

    &:focus {
        outline: ${borders.borderFocus};
    }
`;

const TaskCard: FC<TaskProps> = ({ as, task, removeTask, changeTaskStatus }) => (
    <StyledTaskCard as={as} $isSolved={task.isSolved} $borderColor={borderColors[task.priority]}>
        <Title>{task.title}</Title>
        <Description>{task.description}</Description>
        <Wrapper>
            <Label>
                <CheckBox type="checkbox" checked={task.isSolved} onChange={(e) => changeTaskStatus(task, e.target.checked)} />
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

export default TaskCard;
