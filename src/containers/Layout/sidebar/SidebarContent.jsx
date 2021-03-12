import React, { Component } from 'react';
import SidebarLink from './SidebarLink';


const links = [
	{
		title: 'Home',
		icon: 'home',
		route: '/app/home',
	},
	{
		title: 'Dashboard',
		icon: 'dashboard',
		route: '/app/dashboard/',
	},
	{
		title: 'My Courses',
		icon: 'courses',
		route: '/app/courses',
	},
	{
		title: 'Assessments',
		icon: 'assessments',
		route: '/app/assessment',
	},

	{
		title: 'Settings',
		icon: 'settings',
		route: '/app/settings',
	},
];
class SidebarContent extends Component {

  hideSidebar = () => {
    const { onClick } = this.props;
    onClick();
  };

  render() {
    return (
      <div className="sidebar__content">
        <br />
        {
          links.map(link => (
            <SidebarLink title={link.title} route={link.route} icon={link.icon} key={link.route} />
          ))
        }
      </div>
    );
  }
}

export default SidebarContent;
