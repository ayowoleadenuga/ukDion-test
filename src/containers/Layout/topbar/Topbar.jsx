import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TopbarProfile from './TopbarProfile';
import Logo from '../../../shared/img/logo.svg'
import TopbarNotification from './TopbarNotification';
import TopbarSidebarButton from './TopbarSidebarButton';

class Topbar extends PureComponent {
  static propTypes = {
    changeMobileSidebarVisibility: PropTypes.func.isRequired,
    changeSidebarVisibility: PropTypes.func.isRequired,
  };

  render() {
    const { changeMobileSidebarVisibility, changeSidebarVisibility } = this.props;
    return (
      <div className="topbar">
        <div className="topbar__wrapper">
          <div className="topbar__left">
          <TopbarSidebarButton
              changeMobileSidebarVisibility={changeMobileSidebarVisibility}
              changeSidebarVisibility={changeSidebarVisibility}
            />
            <Link className="topbar__logo" to="/dashboard_default">
              <img src={Logo} alt="page logo" />
            </Link>
          </div>
          <div className="topbar__right">
            <TopbarNotification />
            <TopbarProfile />
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
