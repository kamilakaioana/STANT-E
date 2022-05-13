import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/auth';
import Home from '../pages/home';
import Login from '../pages/login';
import Register from '../pages/register';


export default function AppRoutes() {

const { isAuthenticated } = useAuth();

    return (
        <Routes>
            {
                isAuthenticated ? (
                    <Route path='/'>

                        <Route index element={<Home />} />

                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Route>
                ) :
                    (
                        <>
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route
                                path="*"
                                element={<Navigate to="/login" replace />}
                            />
                        </>
                    )
            }

            {/* <Route path="*" element={<>Não encontrando</>} /> */}
        </Routes>
    );
};