import React from 'react';
import LogInForm from './components/LogInForm';

const LogIn = () => (
  <div className="account white-bg">
    <div className="bckgrndImg">

    </div>
    <div className="account__wrapper1">
      <div className="account__card1">
        <div className="account__head">
          <h3>Sign in</h3>
          <p className="account__head-subtext">Please enter your credentials to proceed</p>
        </div>
        <LogInForm onSubmit />
      </div>
    </div>
  </div>
);

export default LogIn;

// if you want to add select, date-picker and time-picker in your app you need to uncomment the first
// four lines in /scss/components/form.scss to add styles
