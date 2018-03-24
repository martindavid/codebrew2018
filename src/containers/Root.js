// @flow
import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import * as firebase from 'firebase';
import PageLoading from '../components/PageLoading';
import Alert from '../components/Alert';
import { routes } from '../utils//routes';
import Header from '../components/Layout/Header';

type Props = {
  location: Object,
};

class Root extends Component {
  constructor(props) {
    super(props);

    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ loading: false });
      if (user) {
        // Do something
      } else {
        // Do something
      }
    });
  }

  state = {
    loading: true,
  };

  props: Props;

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    return [
      <Alert key="alert" pathname={this.props.location.pathname} />,
      <Switch key="content">
        <Route path={routes.login} />
        <Route path={routes.register} />
        <Route path={routes.home} />
      </Switch>,
    ];
  }
}

export default withRouter(Root);
