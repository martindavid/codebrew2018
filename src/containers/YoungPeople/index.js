import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

import Home from './Home';

class YoungPeopleView extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Header fixed>
          <Title>iFuture</Title>
        </Header>
        <Switch>
          <Route path="/yp" exact component={Home} />
        </Switch>
      </div>
    );
  }
}

export default YoungPeopleView;
