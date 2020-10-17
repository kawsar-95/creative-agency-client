import React from 'react';
import Header from './Home/Header';
import Logos from './Home/Logos';
import Nav from './Home/Nav';

const Home = () => {
    return (
        <div style={{background: '#FBD062', webkitClipPath: 'polygon(100% 0, 86% 100%, 0 100%, 0 0)',
        clipPath: "polygon(0 0, 100% 0%, 100% 96%, 0% 100%)"}} className="container-fluid">
            <Nav></Nav>
            <Header></Header>
            
        </div>
        
    );
};

export default Home;