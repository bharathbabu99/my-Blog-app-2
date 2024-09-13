import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import HomePage from './components/Home';
import CreatePage from './components/Create';
import ContactPage from './components/contacts';
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <div className="AppContainer">
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/create" element={<CreatePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;