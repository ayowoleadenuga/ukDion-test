/* eslint-disable react/no-array-index-key */
import React, { PureComponent } from 'react';
import NotificationIcon from '../../../shared/img/notification_icon.svg';


export default class TopbarNotification extends PureComponent {
    state = {
      collapse: false,
    };

  toggle = () => {
    this.setState(prevState => ({ collapse: !prevState.collapse }));
  };

  render() {
    return (
      <div className="topbar__collapse">
        <button className="topbar__btn" type="button" onClick={this.toggle}>
            <span className="topbar__btn-number">6</span>
            <img src={NotificationIcon} alt="notification_icon" />
        </button>
      </div>
    );
  }
}
