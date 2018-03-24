import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Footer from 'grommet/components/Footer';
import Box from 'grommet/components/Box';
import styled from 'styled-components';

import Home from './Home';


const HeaderStyled = styled(Header)`
 background-color: #ff567e;
 padding: 10px;
`;


class YoungPeopleView extends Component {
  render() {
    console.log(this.props);
    return (
      <Box full>
        <HeaderStyled>
          <Title>iFuture</Title>
        </HeaderStyled>
        <Switch>
          <Route path="/yp" exact component={Home} />
        </Switch>
        <Box align="stretch" justify="end" flex="grow">
          <Footer justify="between">
            <div>
              Test
            </div>
          </Footer>
        </Box>
      </Box>
    );
  }
}

export default YoungPeopleView;
