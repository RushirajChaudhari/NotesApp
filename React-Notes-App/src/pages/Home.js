import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
// import IntroImg from '../images/undraw_Taking_notes_re_bnaf.svg';
// import IntroImg from '../images/home.png';

function Home() {
    return (
        <div className='home-section'>
            {/* <img src={IntroImg} alt='intro-img' width='350px' style={{marginBottom: '20px'}}/> */}
            <h1>Welcome to Notes App By Rushiraj Chaudhari</h1>
            <div className='home-links'>
                <Link to='/register' className='register-link'>Register</Link>
                <Link to='/login' className='login-link'>Login</Link>
            </div>
        </div>
    )
}

export default Home;
