import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Layout from './components/Layout';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import {Auth} from "./components/Auth";

function App() {
    return (
        <Auth>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path='other' element={<NotFound />} />
                </Route>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </Auth>
    );
}

export default App;
