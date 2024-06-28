import React, { FormEventHandler, useState } from 'react';
import styled from 'styled-components';
import Task from '../../types/task';
import priority from '../../types/priority';
import TextInput from '../UI/input/TextInput';
import RateGroup from '../UI/input/RateGroup';
import TextArea from '../UI/textarea/TextArea';
import colors from '../../global/colors';
import Button from '../UI/button/Button';
import Heading from '../UI/text/Heading';
import Title from '../UI/text/Title';

type TaskFormProps = {
    onTaskCreated: (newTask: Task) => void;
};

const StyledTaskForm = styled.form`
    box-sizing: border-box;
    display: grid;
    row-gap: 1rem;
    padding: 20px;
    border: solid 2px ${colors.taskFormBorder};
    border-radius: 20px;
    font-family: sans-serif;
`;

const Wrapper = styled.label`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    border: none;
`;

const TaskForm: React.FC<TaskFormProps> = ({ onTaskCreated }) => {
    const [newTask, setNewTask] = useState<Task>({
        id: 1,
        title: '',
        description: '',
        priority: priority.low,
    });

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        onTaskCreated(newTask);
        setNewTask({
            ...newTask,
            id: newTask.id + 1,
            title: '',
            description: '',
            priority: priority.low,
        });
    };

    return (
        <StyledTaskForm action="" onSubmit={handleSubmit}>
            <Heading>Новая задача</Heading>
            <Wrapper>
                <Title as="label">Заголовок</Title>
                <TextInput
                    required
                    id="title"
                    placeholder="Введите заголовок"
                    value={newTask.title}
                    onChange={(e) => {
                        setNewTask({ ...newTask, title: e.target.value });
                    }}
                />
            </Wrapper>
            <Wrapper>
                <Title as="label">Описание</Title>
                <TextArea
                    id="description"
                    placeholder="Введите описание"
                    value={newTask.description}
                    onChange={(e) => {
                        setNewTask({ ...newTask, description: e.target.value });
                    }}
                />
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
