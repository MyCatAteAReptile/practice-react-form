import { Navigate, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';

const AppRouter = () => (
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
);

export default AppRouter;
