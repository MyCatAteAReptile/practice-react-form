import React, { useEffect, useState } from 'react';
import Task from '../../types/task';

type TaskListProps = {
    newTask: Task | undefined;
};

const TaskList: React.FC<TaskListProps> = ({ newTask }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        if (newTask) {
            setTasks((prevTasks) => [...prevTasks, newTask]);
        }
    }, [newTask]);

    return tasks.length ? (
        <ul>
            {tasks.map((taskElement) => (
                <li key={taskElement.id}>
                    <p>
                        {taskElement.id}+{taskElement.title}+
                        {taskElement.description}+{taskElement.priority}
                    </p>
                </li>
            ))}
        </ul>
    ) : (
        <p>Нет задач</p>
    );
};

export default TaskList;
