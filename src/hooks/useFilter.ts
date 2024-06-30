import { useMemo } from 'react';
import Filter from '../types/filter';
import Task from '../types/task';

const useSort = (tasks: Task[], sort: Filter['sort']) => {
    const sortedTasks = useMemo(() => {
        switch (sort) {
            case 'highToLowPriority':
                return [...tasks].sort((a, b) => Number(b.priority) - Number(a.priority));
            case 'lowToHighPriority':
                return [...tasks].sort((a, b) => Number(a.priority) - Number(b.priority));
            case 'onlySolved':
                return [...tasks].filter((a) => a.isSolved);
            case 'onlyUnsolved':
                return [...tasks].filter((a) => !a.isSolved);
            default:
                return tasks;
        }
    }, [tasks, sort]);

    return sortedTasks;
};

const useSearch = (tasks: Task[], query: Filter['query']) => {
    const serchedTasks = useMemo(() => tasks.filter((task) => task.title.toLowerCase().includes(query.toLowerCase())), [tasks, query]);

    return serchedTasks;
};

const useFilter = (tasks: Task[], filter: Filter) => {
    const sortedTasks = useSort(tasks, filter.sort);
    const searchedTasks = useSearch(sortedTasks, filter.query);

    return searchedTasks;
};

export default useFilter;
