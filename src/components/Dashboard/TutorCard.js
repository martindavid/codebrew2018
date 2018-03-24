import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import styled from 'styled-components';
import Image from 'grommet/components/Image';
import Anchor from 'grommet/components/Anchor';
import AccessVolumeControl from 'grommet/components/icons/base/AccessVolumeControl';
import VideoIcon from 'grommet/components/icons/base/Video';
import CustomCard from '../Layout/Card';

const MenuBox = styled.div`
  padding: 10px;
  width: 100%;
  text-align: center;

  &:hover {
    background-color: grey;
  }
`;

class TutorCard extends Component {
  render() {
    return (
      <CustomCard className="tutor-card">
        <Image
          src="http://u.lorenzoferrara.net/marlenesco/material-card/thumb-morgan-freeman.jpg"
          full={false}
          size="small"
        />
        <h2>Tutor Name</h2>
        <div className="tutor-about">
          The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for destruction. He has Killer yellow horseshoe mustache.
        </div>
        <Box
          direction="row"
          responsive={false}
        >
          <MenuBox>
            <Anchor
              href="#"
              icon={<AccessVolumeControl />}
            />
          </MenuBox>
          <MenuBox>
            <Anchor
              href="#"
              icon={<VideoIcon />}
            />
          </MenuBox>
        </Box>
      </CustomCard>
    );
  }
}

export default TutorCard;
