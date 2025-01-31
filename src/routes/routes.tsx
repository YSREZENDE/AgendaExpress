import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../presentation/pages/home/home';
import { Home2 } from '../presentation/pages/home2';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rota curinga: redireciona para 'home' se a rota não existir */}
                <Route path='*' element={<Navigate to='/home' />} />

                <Route path='/home' element={<Home />} />
                <Route path='/home2' element={<Home2 />} />
            </Routes>
        </BrowserRouter>
    );
};
