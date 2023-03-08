import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import{BrowserRouter,Routes,Route, Router} from "react-router-dom";
import React from 'react';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header></Header>
    <Routes>
    <Route path = "/" element = {<About/>}/>
    <Route path = "/portfolio" element = {<Portfolio/>}/>
    <Route path = "/resume" element = {<Resume/>}/>
    <Route path = "/contact" element = {<Contact/>}/>
    </Routes>
    
    <Footer></Footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
