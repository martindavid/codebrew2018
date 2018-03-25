// @flow
import React from 'react';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
import Animate from 'grommet/components/Animate';
import ClapIcon from '../../assets/clap.png';

type Props = {
  history: Object,
};

function MeetingComplete(props: Props) {
  return (
    <Box align="center" justify="center" pad="large">
      <Animate enter={{ animation: 'slide-up', duration: 1000, delay: 0 }}>
        <Image src={ClapIcon} size="small" />
      </Animate>
      <Animate enter={{ animation: 'fade', duration: 1000, delay: 1000 }}>
        <Box pad={{ vertical: 'large' }}>
          <Heading align="center" strong>
            Congratulations!
          </Heading>
          <Heading align="center" tag="h2">
            You have earned 100 points
          </Heading>
        </Box>
        <Box align="center">
          <Button primary label="Next" onClick={() => props.history.push('/yp/home')} />
        </Box>
      </Animate>
    </Box>
  );
}

export default MeetingComplete;
