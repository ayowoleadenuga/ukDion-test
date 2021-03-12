import React from 'react';
import { Field } from 'redux-form';

const PageOne = ({ setPageNum}) => {
    return (
        <>
        <div className="account__head">
            <h3 className="account__title">Create a new account
            </h3>
            <h4 className="account__subhead subhead">Please enter your credentials to proceed</h4>
        </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Full Name</span>
            <div className="form__form-group-field">
              <Field
                name="name"
                component="input"
                type="text"
                placeholder="Enter your full name here"
              />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Email Address</span>
            <div className="form__form-group-field">
              <Field
                name="email"
                component="input"
                type="email"
                placeholder="example@examplemail.com"
              />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Password</span>
            <div className="form__form-group-field">
              <Field
                name="password"
                component="input"
                type="password"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <button className="btn btn-primary account__btn account__btn--small" type="button" onClick={()=>setPageNum(2)}>Proceed to next step</button>
          </>
    );
};

export default PageOne;