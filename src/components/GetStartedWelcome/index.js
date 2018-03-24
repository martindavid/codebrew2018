// @flow
import React from 'react';
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
};

const Icon = styled(Image)`
  height: 100px;
  width: 100px;
`;

function GetStartedWelcome(props: Props) {
  return (
    <Box full align="center" justify="center">
      <Heading margin="large" align="center" strong>
        I am a
      </Heading>
      <Box pad={{ between: 'medium' }}>
        <Animate enter={{ animation: 'fade', duration: 1000, delay: 0 }}>
          <Box align="center" onClick={() => props.history.push(routes.getStartedDemographic)}>
            <Icon src={YPIcon} />
            <Label>Student</Label>
          </Box>
        </Animate>
        <Animate enter={{ animation: 'fade', duration: 1000, delay: 0 }}>
          <Box align="center" onClick={() => props.history.push(routes.getStartedDemographic)}>
            <Icon src={ProIcon} />
            <Label>Professional</Label>
          </Box>
        </Animate>
      </Box>
    </Box>
  );
}

export default GetStartedWelcome;
