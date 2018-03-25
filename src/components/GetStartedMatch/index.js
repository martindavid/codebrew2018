// @flow
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';
import Animate from 'grommet/components/Animate';
import Spinning from 'grommet/components/icons/Spinning';
import { routes } from '../../utils/routes';

type Props = {
  submit: () => void,
  role: string,
};

class GetStartedMatch extends Component {
  state = {
    loading: true,
    showingMentor: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 5000);
  }

  showingMentor = () => {
    this.props.submit();
    setTimeout(() => {
      this.setState({
        showingMentor: false,
      });
    }, 3000);
  };

  props: Props;

  render() {
    if (this.state.loading) {
      return (
        <Box
          full
          align="center"
          justify="center"
          pad={{ vertical: 'large', between: 'large', horizontal: 'large' }}
        >
          <Spinning size="large" />
          <Heading tag="h3" align="center">
            Let our Machine Learning algorithm find the best mentor for you
          </Heading>
        </Box>
      );
    }

    if (this.state.showingMentor) {
      this.showingMentor();
      return (
        <Box
          full
          align="center"
          justify="center"
          pad={{ vertical: 'large', between: 'large', horizontal: 'large' }}
        >
          <Animate enter={{ animation: 'fade', duration: 1000, delay: 0 }}>
            <Box pad={{ between: 'large' }} align="center">
              <Image
                src="http://u.lorenzoferrara.net/marlenesco/material-card/thumb-morgan-freeman.jpg"
                size="small"
                style={{ borderRadius: '10px' }}
              />
              <Heading tag="h3" align="center">
                Morgan Freeman
              </Heading>
            </Box>
          </Animate>
        </Box>
      );
    }

    return <Redirect to={this.props.role === 'yp' ? routes.ypHome : routes.ypHome} />;
  }
}

export default GetStartedMatch;
