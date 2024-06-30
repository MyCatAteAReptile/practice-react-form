import priority from './priority';

type Task = {
    id: number;
    title: string;
    description: string;
    priority: (typeof priority)[keyof typeof priority];
    isSolved: boolean;
};

export default Task;
