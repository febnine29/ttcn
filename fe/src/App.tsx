import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Routes, Route } from 'react-router-dom';
import Admin from './components/Admin'
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import MainPage from './components/MainPage';
import './App.css';
import Antman from './components/MainPage/movies/antman';
import Panther from './components/MainPage/movies/panther';
import Captain from './components/MainPage/movies/captain';
import Thor from './components/MainPage/movies/thor';
import Ironman from './components/MainPage/movies/ironman';
import Hawkeye from './components/MainPage/movies/hawkeye';
import Avenger from './components/MainPage/movies/avenger';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/admin' element={<Admin />}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/main' element={ <MainPage />} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/3' element={ <Antman />} />
        <Route path='/9' element={ <Panther />} />
        <Route path='/4' element={ <Captain />} />
        <Route path='/8' element={ <Thor />} />
        <Route path='/7' element={ <Ironman />} />
        <Route path='/6' element={ <Hawkeye />} />
        <Route path='/5' element={ <Avenger />} />
      </Routes>
    </div>
  );
}

export default App;
