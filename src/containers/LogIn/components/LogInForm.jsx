import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class LogInForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      showPassword: false,
    };
  }

  showPassword = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ showPassword: !prevState.showPassword }));
  };

  render() {
    const { handleSubmit } = this.props;
    const { showPassword } = this.state;

    return (
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__form-group">
          <span className="form__form-group-label">EMAIL ADDRESS</span>
          <div className="form__form-group-field">
            <Field
              name="email"
              component="input"
              type="text"
              placeholder="abc@xyz.com"
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">
            PASSWORD
            <span className="forgotP">
              <a href="/">Forgot password?</a>
            </span>
          </span>
          <div className="form__form-group-field">
            <Field
              name="password"
              component="input"
              type={showPassword ? 'text' : 'password'}
              placeholder="******"
            />
          </div>
        </div>
        <Link className="btn btn-primary account__btn account__btn--small" to="/app/home">Sign In</Link>
        <div className="link_to_signup">
          Don't have an account? 
          <span>
            <Link to="/signup">
              Sign up
            </Link>
          </span>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'log_in_form',
})(LogInForm);
