import React from 'react';
import './styles/app.css';
import { Routes, Route } from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";
import Home from "./pages/Home";
import NotFound from './pages/NotFound';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path={"/"} element={<MainLayouts />}>
                <Route path={""} element={<Home />} />
                <Route path={"*"} element={<NotFound />}/>
            </Route>
        </Routes>
    )
}

export default App;
