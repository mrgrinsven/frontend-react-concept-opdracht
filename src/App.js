import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css';

import Home from './pages/home/Home';
import Subreddit from './pages/subreddit/Subreddit'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


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
                <Footer/>
            </footer>
        </>
    );
}

export default App;
