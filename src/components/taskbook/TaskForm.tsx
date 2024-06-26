import React, { FormEventHandler, useState } from 'react';
import Task from '../../types/task';
import priority from '../../types/priority';
import TextInput from '../UI/input/TextInput';
// import Radio from '../UI/input/Radio';
import RateGroup from '../UI/input/RateGroup';

type TaskFormProps = {
    onTaskCreated: (newTask: Task) => void;
};

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
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="title">Заголовок</label>
            <TextInput
                id="title"
                placeholder="Введите заголовок"
                value={newTask.title}
                onChange={(e) => {
                    setNewTask({ ...newTask, title: e.target.value });
                }}
            />
            <label htmlFor="description">Описание</label>
            <TextInput
                id="description"
                placeholder="Введите описание"
                value={newTask.description}
                onChange={(e) => {
                    setNewTask({ ...newTask, description: e.target.value });
                }}
            />
            <fieldset>
                <legend>Важность</legend>
                <RateGroup
                    values={Object.values(priority).reverse()}
                    name="priority"
                    onChange={(e) => {
                        setNewTask({
                            ...newTask,
                            priority: e.target.value as Task['priority'],
                        });
                    }}
                    checkedValue={newTask.priority}
                />
            </fieldset>
            <button type="submit">Создать задачу</button>
        </form>
    );
};

export default TaskForm;
