// @flow
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import GetStartedWelcome from '../../components/GetStartedWelcome';
import GetStartedDemographic from '../../components/GetStartedDemographic';
import GetStartedYP from '../../components/GetStartedYP';
import { routes } from '../../utils/routes';

class GetStarted extends Component {
  constructor(props) {
    super(props);

    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then((res) => {
        this.setState({
          countries: res.map(el => el.name),
          languages: res.map(el => el.languages[0].name),
        });
      });
  }

  state = {
    countries: [],
    languages: [],
  };

  renderGetStartedDemographic = routeProps => (
    <GetStartedDemographic
      countries={this.state.countries}
      languages={this.state.languages}
      {...routeProps}
    />
  );

  render() {
    return (
      <Switch>
        <Route path={routes.getStartedDemographic} render={this.renderGetStartedDemographic} />
        <Route path={routes.getStartedYP} component={GetStartedYP} />
        <Route path={routes.getStarted} component={GetStartedWelcome} />
      </Switch>
    );
  }
}

export default GetStarted;
