import Task from '../types/task';

export const loadTasks = () => {
    const tasks = localStorage.getItem('tasks');

    return tasks ? JSON.parse(tasks) : undefined;
};

export const saveTasks = (tasks: Task[]) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};
