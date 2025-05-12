import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Card1 from './card1'
import Card2 from './card2'
import Card3 from './card3'
import styled from 'styled-components';


function Home() {
  return <div style={{display:"flex",flexDirection:'row'}}>
  
  <Card1 />
  <Card2 />
  <Card3 />
  </div>

  
}

function About() {
  return <h2><font color="purple">Ratan tata become the chairman of tata group</font> </h2>;
}

function Contact() {
  return <h2> <font color="green">📞nandish:7676839917</font><br></br>
         <font color="pink">📞karthik:9632287530</font><br></br>
         <font color="blue">📞nagaraj:8549001760</font><br></br>
         <font color="red">📞yaseen:8147099034</font><br></br>
        </h2>
}

function Routerex() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default Routerex;