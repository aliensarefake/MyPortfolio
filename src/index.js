import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Skills from './Skills'
import Navbar from './Navbar'
import Footer from './Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
    <Navbar/>
    <App name="Guo Xiao Yu"/>
    <Skills/>
    <Footer/>
    </React.Fragment>
);


