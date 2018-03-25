// @flow
import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
import Animate from 'grommet/components/Animate';
import Anchor from 'grommet/components/Anchor';
import FacebookIcon from 'grommet/components/icons/base/SocialFacebook';
import TwitterIcon from 'grommet/components/icons/base/SocialTwitter';
import TrophyIcon from 'grommet/components/icons/base/Trophy';

type Props = {
  history: Object,
};

function CourseListComplete(props: Props) {
  return (
    <Box align="center" justify="center" pad="large">
      <Animate enter={{ animation: 'slide-up', duration: 1000, delay: 0 }}>
        <TrophyIcon style={{ stroke: '#d60b52', width: '150px', height: '150px' }} />
      </Animate>
      <Animate enter={{ animation: 'fade', duration: 1000, delay: 1000 }}>
        <Box pad={{ vertical: 'large' }}>
          <Heading align="center" strong>
            Congratulations!
          </Heading>
          <Heading align="center" tag="h2">
            You have earned 120 points
          </Heading>
        </Box>
        <Box justify="center" pad={{ between: 'large' }} direction="row" responsive={false}>
          <Anchor
            icon={<FacebookIcon style={{ fill: '#3b5998', width: '36px', height: '36px' }} />}
            href="#"
          />
          <Anchor
            icon={<TwitterIcon style={{ fill: '#326ada', width: '36px', height: '36px' }} />}
            href="#"
          />
        </Box>
        <Box align="center" margin={{ top: 'large' }}>
          <Button primary label="Next" onClick={() => props.history.push('/yp/home')} />
        </Box>
      </Animate>
    </Box>
  );
}

export default CourseListComplete;
