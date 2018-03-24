// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import Image from 'grommet/components/Image';
import Animate from 'grommet/components/Animate';
import { routes } from '../../utils/routes';
import YPIcon from '../../assets/yp-icon.png';
import ProIcon from '../../assets/pro-icon.png';

type Props = {
  history: Object,
  setRole: string => void,
};

const Icon = styled(Image)`
  height: 100px;
  width: 100px;
`;

class GetStartedWelcome extends Component {
  onYPClicked = () => {
    this.props.setRole('yp');
    this.props.history.push(routes.getStartedDemographic);
  };

  onProClicked = () => {
    this.props.setRole('pro');
    this.props.history.push(routes.getStartedDemographic);
  };

  props: Props;

  render() {
    return (
      <Box full align="center" justify="center">
        <Heading margin="large" align="center" strong>
          I am a
        </Heading>
        <Box pad={{ between: 'medium' }}>
          <Animate enter={{ animation: 'fade', duration: 1000, delay: 0 }}>
            <Box align="center" onClick={this.onYPClicked}>
              <Icon src={YPIcon} />
              <Label>Student</Label>
            </Box>
          </Animate>
          <Animate enter={{ animation: 'fade', duration: 1000, delay: 0 }}>
            <Box align="center" onClick={this.onProClicked}>
              <Icon src={ProIcon} />
              <Label>Professional</Label>
            </Box>
          </Animate>
        </Box>
      </Box>
    );
  }
}

export default GetStartedWelcome;
