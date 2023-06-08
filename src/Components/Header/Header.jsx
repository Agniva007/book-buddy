import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            {/* <Navbar /> */}
            <div className='whole-content'>
                <Navbar />
                <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>A room without books is like<br/> a body without a soul.</h2><br />
                <p className='header-text fs-18 fw-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae sapiente quibusdam consequatur perspiciatis facere laboriosam non nesciunt at id repudiandae, modi iste? Eligendi, rerum!</p>
                <SearchForm />
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header