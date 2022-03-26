import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import './App.css';

function App() {
    return (
        <Routes>
            <Route path="first" element={<First/>}/>
            <Route path="second" element={<Second/>}/>
            <Route path="third" element={<Third/>}/>
            <Route path="/" element={<Navigate to="first" replace/>}/>
        </Routes>
    );
}

export default App;
