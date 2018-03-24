// @flow
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PageLoading from '../PageLoading';
import { routes } from '../../utils/routes';

type Props = {
  submit: () => void,
  role: string,
};

class GetStartedMatch extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.props.submit();
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 5000);
  }

  props: Props;

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    return <Redirect to={this.props.role === 'yp' ? routes.yp : routes.pro} />;
  }
}

export default GetStartedMatch;
