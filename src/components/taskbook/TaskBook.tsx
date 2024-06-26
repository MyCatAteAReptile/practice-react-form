import { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import Task from '../../types/task';

const TaskBook = () => {
    const [task, setTask] = useState<Task | undefined>();
    const onTaskCreated = (newTask: Task | undefined) => {
        if (newTask) {
            setTask({
                id: newTask.id,
                title: newTask.title,
                description: newTask.description,
                priority: newTask.priority,
            });
        }
    };

    return (
        <div>
            <TaskForm onTaskCreated={onTaskCreated} />
            <TaskList newTask={task} />
        </div>
    );
};

export default TaskBook;
