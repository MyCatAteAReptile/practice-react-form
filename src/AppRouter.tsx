import { Navigate, Route, Routes } from 'react-router-dom';
import TaskBook from './components/taskbook/TaskBook';

const AppRouter = () => (
    <Routes>
        <Route path="/" element={<TaskBook />} />
        <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
);

export default AppRouter;
