import React from 'react';
import { reduxForm } from 'redux-form';
import PageOne from './PageOne';
import PageThree from './PageThree';
import PageTwo from './PageTwo';

const SignupForm = (props) => {
    const { handleSubmit, setPageNum, pageNum } = props;

    return (
      <div className="account__card">
        <form className="form signupForm" onSubmit={handleSubmit}>
          {pageNum === 1 && <PageOne setPageNum={setPageNum} />}
          {pageNum === 2 && <PageTwo setPageNum={setPageNum} />}
          {pageNum === 3 && <PageThree setPageNum={setPageNum} />}
        </form>
      </div>
    );
  }

export default reduxForm({
  form: 'signup_form',
})(SignupForm);
