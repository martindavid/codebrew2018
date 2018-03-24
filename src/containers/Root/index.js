// @flow
import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import * as firebase from 'firebase';
import App from 'grommet/components/App';
import PageLoading from '../../components/PageLoading';
import Alert from '../../components/Alert';
import Login from '../../components/Login';
import Register from '../../components/Register';
import { routes } from '../../utils//routes';
import YoungPeopleView from '../YoungPeople';

type Props = {
  history: Object,
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
        // this.props.history.push(routes.login);
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

    return (
      <App centered={false}>
        <Alert key="alert" pathname={this.props.location.pathname} />
        <Switch key="content">
          <Route path={routes.login} component={Login} />
          <Route path={routes.register} component={Register} />
          <Route path={routes.yp} component={YoungPeopleView} />
          <Route path={routes.home} />
        </Switch>
      </App>
    );
  }
}

export default withRouter(Root);
