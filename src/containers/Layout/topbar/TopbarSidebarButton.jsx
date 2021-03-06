import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import icon from '../../../shared/img/burger.svg';

// const icon = `${process.env.PUBLIC_URL}/img/burger.svg`;

class TopbarSidebarButton extends PureComponent {
  static propTypes = {
    changeMobileSidebarVisibility: PropTypes.func.isRequired
  };

  render() {
    const { changeMobileSidebarVisibility } = this.props;

    return (
      <div>
        {/* <button type="button" className="topbar__button topbar__button--desktop" onClick={changeSidebarVisibility}>
          <img src={icon} alt="" className="topbar__button-icon" />
        </button> */}
        <button type="button" className="topbar__button topbar__button--mobile" onClick={changeMobileSidebarVisibility}>
          <img src={icon} alt="" className="topbar__button-icon" />
        </button>
      </div>
    );
  }
}

export default TopbarSidebarButton;
