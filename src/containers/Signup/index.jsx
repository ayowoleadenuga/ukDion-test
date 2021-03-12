import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import SignupForm from './components/Signup';
import logo from '../../shared/img/logo.svg'

const Signup = () => {
  const [currPage, setCurrPage] = useState(1)
  
  return (
  <div className="account other-bg">
    <div className="account__wrapper">
        <div className="logoGroup">
          <img src={logo} alt="logo" />
        </div>
        <SignupForm setPageNum={setCurrPage} pageNum={currPage} onSubmit />
        <div className="pageDir">
          <p className="pageNum"><span>{currPage}</span>/3</p>
          <div className="pointers">
            <p className="p1 circle ash hidden"></p>
            <p className="p1 circle purple"></p>
            <p className={`p2 line ${currPage === 2 || currPage === 3 ? "purple" : "ash"}`}></p>
            <p className={`p2 circle ${currPage === 2 || currPage === 3 ? "purple" : "ash"}`}></p>
            <p className={`p2 line ${currPage === 3 ? "purple" : "ash"}`}></p>
            <p className={`p2 circle ${currPage === 3 ? "purple" : "ash"}`}></p>
          </div>
        </div>
    </div>
  </div>
)};

export default Signup;

// if you want to add select, date-picker and time-picker in your app you need to uncomment the first
// four lines in /scss/components/form.scss to add styles
