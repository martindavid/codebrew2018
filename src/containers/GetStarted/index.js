// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import * as firebase from 'firebase';
import { Switch, Route } from 'react-router-dom';
import GetStartedWelcome from '../../components/GetStartedWelcome';
import GetStartedDemographic from '../../components/GetStartedDemographic';
import GetStartedEducationLevel from '../../components/GetStartedEducationLevel';
import GetStartedSubjects from '../../components/GetStartedSubjects';
import GetStartedMatch from '../../components/GetStartedMatch';
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
    profile: undefined,
  };

  setRole = (role) => {
    this.setState({
      profile: {
        ...this.state.profile,
        role,
      },
    });
  };

  setProfile = (profile) => {
    this.setState({
      profile: {
        ...this.state.profile,
        ...profile,
      },
    });
  };

  setEducation = (education) => {
    this.setState({
      profile: {
        ...this.state.profile,
        education,
      },
    });
  };

  setSubjects = (subjects) => {
    this.setState({
      profile: {
        ...this.state.profile,
        subjects,
      },
    });
  };

  submit = () => {
    const user = firebase.auth().currentUser;
    const input = {
      ...this.state.profile,
      hasProfile: true,
    };
    const db = firebase.firestore();
    db
      .collection('users')
      .doc(user.uid)
      .update(input);
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

  renderGetStartedEducationLevel = routeProps => (
    <GetStartedEducationLevel setEducation={this.setEducation} {...routeProps} />
  );

  renderGetStartedSubjects = routeProps => (
    <GetStartedSubjects setSubjects={this.setSubjects} {...routeProps} />
  );

  renderGetStartedMatch = routeProps => (
    <GetStartedMatch submit={this.submit} role={this.state.profile.role} {...routeProps} />
  );

  render() {
    return (
      <Switch>
        <Route path={routes.getStartedDemographic} render={this.renderGetStartedDemographic} />
        <Route
          path={routes.getStartedEducationLevel}
          render={this.renderGetStartedEducationLevel}
        />
        <Route path={routes.getStartedSubjects} render={this.renderGetStartedSubjects} />
        <Route path={routes.getStartedMatch} render={this.renderGetStartedMatch} />
        <Route path={routes.getStarted} render={this.renderGetStartedWelcome} />
      </Switch>
    );
  }
}

export default GetStarted;
