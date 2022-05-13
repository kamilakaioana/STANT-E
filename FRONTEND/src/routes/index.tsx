import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import Register from '../pages/register';


export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/'>

                <Route index element={<Home />} />
 
                <Route path="*" element={<>Não encontrando</>} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="*" element={<>Não encontrando</>} />
        </Routes>
    );
};