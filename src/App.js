import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css';

import Home from './pages/home/Home';
import Subreddit from './pages/subreddit/Subreddit'
import Header from './components/header/Header';


function App() {
    const [subreddit, setSubreddit] = useState()
    return (
        <>
            <header className="outer-container">
                <Header subredditState={subreddit}/>
            </header>
            <main className="outer-container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/subreddit/:subredditId" element={<Subreddit setSubredditState={setSubreddit}/>}/>
                </Routes>
            </main>
            <footer className="outer-container">
                <div className="inner-container">In opdracht van NOVI Hogeschool © 2022</div>
            </footer>
        </>
    );
}

export default App;
