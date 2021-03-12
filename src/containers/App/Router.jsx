import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../Layout/index';
import MainWrapper from './MainWrapper';
import LogIn from '../LogIn/index';
import Signup from '../Signup';
import Home from '../Home/Home';
import Dashboard from '../Dashboard/Dashboard';
import MyCourses from '../MyCourses/MyCourses';


const wrappedRoutes = () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/app/home" component={Home} />
      <Route path="/app/dashboard" component={Dashboard} />
      <Route path="/app/courses" component={MyCourses} />
    </div>
  </div>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/log_in" component={LogIn} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/app" component={wrappedRoutes} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
