// @flow
import React from 'react';
import Box from 'grommet/components/Box';
import styled from 'styled-components';
import Image from 'grommet/components/Image';
import Anchor from 'grommet/components/Anchor';
import AccessVolumeControl from 'grommet/components/icons/base/AccessVolumeControl';
import ChatIcon from 'grommet/components/icons/base/Chat';
import VideoIcon from 'grommet/components/icons/base/Video';
import CustomCard from '../Layout/Card';

type Props = {
  history: Object,
};

const MenuBox = styled.div`
  padding: 10px;
  width: 100%;
  text-align: center;
`;

function TutorCard(props: Props) {
  return (
    <CustomCard className="tutor-card">
      <h3 style={{ marginBottom: '5px', textAlign: 'left' }}>Your Mentor</h3>
      <Image
        src="http://u.lorenzoferrara.net/marlenesco/material-card/thumb-morgan-freeman.jpg"
        size="small"
        style={{ borderRadius: '10px' }}
      />
      <h2>M. Freeman</h2>
      <div className="tutor-about">
        The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry
        for destruction. He has Killer yellow horseshoe mustache.
      </div>
      <Box direction="row" responsive={false}>
        <MenuBox>
          <Anchor
            icon={<AccessVolumeControl />}
            onClick={() => props.history.push('/yp/home/meeting-notes')}
          />
        </MenuBox>
        <MenuBox>
          <Anchor href="skype:adam.li.xm@gmail.com?call" icon={<VideoIcon />} />
        </MenuBox>
        <MenuBox>
          <Anchor href="#" icon={<ChatIcon />} />
        </MenuBox>
      </Box>
    </CustomCard>
  );
}

export default TutorCard;
