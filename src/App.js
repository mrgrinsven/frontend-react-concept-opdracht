import React, {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css';

import Home from './pages/home/Home';
import Subreddit from './pages/subreddit/Subreddit'
import axios from "axios";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/subreddit/:subredditId" element={<Subreddit/>}/>
            </Routes>

        </>
    );
}

export default App;
