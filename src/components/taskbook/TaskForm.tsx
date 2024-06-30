import { FC, FormEventHandler, useState } from 'react';
import styled from 'styled-components';
import Task from '../../types/task';
import priority from '../../types/priority';
import TextInput from '../UI/input/TextInput';
import RateGroup from '../UI/input/RateGroup';
import TextArea from '../UI/textarea/TextArea';
import Button from '../UI/button/Button';
import Heading from '../UI/text/Heading';
import Title from '../UI/text/Title';
import borders from '../../global/borders';
import ErrorMessage from '../UI/error/ErrorMessage';

type TaskFormProps = {
    onTaskCreated: (newTask: Task) => void;
};

const titleMaxLength = 30;
const descriptionMaxLength = 200;
const errorMessages = {
    emptyTitle: 'Введите, пожалуйста, заголовок',
    longTitle: `Заголовок должен быть короче ${titleMaxLength} символов`,
    longDescription: `Описание должно быть короче ${descriptionMaxLength} символов`,
};

const StyledTaskForm = styled.form`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    padding: 20px;
    border: ${borders.border};
    border-radius: 20px;
    box-shadow: 0 5px 10px 0 rgba(0 0 0 / 50%);
    font-family: sans-serif;
`;

const Wrapper = styled.label`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    border: none;
`;

const TaskForm: FC<TaskFormProps> = ({ onTaskCreated }) => {
    const [error, setError] = useState({ titleError: '', descriptionError: '' });
    const [newTask, setNewTask] = useState<Task>({
        id: 0,
        title: '',
        description: '',
        priority: priority.low,
        isSolved: false,
    });

    const clearTask = () => {
        setNewTask({
            ...newTask,
            title: '',
            description: '',
            priority: priority.low,
        });
    };

    const isTitleFulfilled = (title: string) => title.length !== 0;

    const isTitleValid = (title: string) => title.length <= titleMaxLength;

    const isDescriptionValid = (description: string) => description.length <= descriptionMaxLength;

    const isTaskValid = (task: Task) => {
        let valid = true;

        if (!isTitleFulfilled(task.title)) {
            valid = false;
            setError((prevError) => ({ ...prevError, titleError: errorMessages.emptyTitle }));
        }

        if (!isTitleValid(task.title)) {
            valid = false;
            setError((prevError) => ({ ...prevError, titleError: errorMessages.longTitle }));
        }

        if (!isDescriptionValid(task.description)) {
            valid = false;
            setError((prevError) => ({ ...prevError, descriptionError: errorMessages.longDescription }));
        }

        return valid;
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if (isTaskValid(newTask)) {
            onTaskCreated(newTask);
            clearTask();
        }
    };

    return (
        <StyledTaskForm action="" onSubmit={handleSubmit}>
            <Heading>Новая задача</Heading>
            <Wrapper>
                <Title as="label">Заголовок</Title>
                <TextInput
                    id="title"
                    placeholder="Введите заголовок"
                    value={newTask.title}
                    onChange={(e) => {
                        setError({ ...error, titleError: '' });
                        setNewTask({ ...newTask, title: e.target.value });
                    }}
                />
                <ErrorMessage>{error.titleError}</ErrorMessage>
            </Wrapper>
            <Wrapper>
                <Title as="label">Описание</Title>
                <TextArea
                    id="description"
                    placeholder="Введите описание"
                    value={newTask.description}
                    onChange={(e) => {
                        setError({ ...error, descriptionError: '' });
                        setNewTask({ ...newTask, description: e.target.value });
                    }}
                />
                <ErrorMessage>{error.descriptionError}</ErrorMessage>
            </Wrapper>
            <Wrapper as="fieldset">
                <Title as="legend">Важность</Title>
                <RateGroup
                    values={Object.values(priority)}
                    name="priority"
                    onChange={(e) => {
                        setNewTask({
                            ...newTask,
                            priority: e.target.value as Task['priority'],
                        });
                    }}
                    checkedValue={newTask.priority}
                />
            </Wrapper>
            <Button type="submit">Создать задачу</Button>
        </StyledTaskForm>
    );
};

export default TaskForm;
