// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import * as firebase from 'firebase';
import { Switch, Route } from 'react-router-dom';
import GetStartedWelcome from '../../components/GetStartedWelcome';
import GetStartedDemographic from '../../components/GetStartedDemographic';
import GetStartedEducationLevel from '../../components/GetStartedEducationLevel';
import { routes } from '../../utils/routes';

class GetStarted extends Component {
  constructor(props) {
    super(props);

    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then((res) => {
        this.setState({
          countries: res.map(el => el.name),
          languages: _.uniqBy(res.map(el => el.languages[0].name), e => e),
        });
      });
  }

  state = {
    countries: [],
    languages: [],
    role: undefined,
    profile: undefined,
  };

  setRole = (role) => {
    this.setState({ role });
  };

  setProfile = (profile) => {
    this.setState({ profile });
  };

  setEducation = (education) => {
    this.setState({
      profile: {
        ...this.state.profile,
        education,
      },
    });
  };

  submit = () => {
    const user = firebase.auth().currentUser;
    const db = firebase.firestore();
    db
      .collection('profiles')
      .doc(user.uid)
      .set(this.state.profile);
  };

  renderGetStartedWelcome = routeProps => (
    <GetStartedWelcome setRole={this.setRole} {...routeProps} />
  );

  renderGetStartedDemographic = routeProps => (
    <GetStartedDemographic
      countries={this.state.countries}
      languages={this.state.languages}
      setProfile={this.setProfile}
      {...routeProps}
    />
  );

  renderEducationLevel = routeProps => (
    <GetStartedEducationLevel setEducation={this.setEducation} {...routeProps} />
  );

  render() {
    return (
      <Switch>
        <Route path={routes.getStartedDemographic} render={this.renderGetStartedDemographic} />
        <Route path={routes.getStartedEducationLevel} render={this.renderEducationLevel} />
        <Route path={routes.getStarted} render={this.renderGetStartedWelcome} />
      </Switch>
    );
  }
}

export default GetStarted;
