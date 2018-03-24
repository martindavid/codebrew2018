import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import styled from 'styled-components';

import Home from './Home';
import CourseList from './CourseList';
import Progress from './Progress';
import FooterMenu from '../../components/Layout/FooterMenu';
import BgImage from '../../assets/home-page-bg.png';

const HeaderStyled = styled(Header)`
 background-color: #d60b52;
 padding: 10px;
 position: fixed;
 z-index: 10;
`;

const ContentDiv = styled.div`
  margin-bottom: 50px;
  margin-top: 50px;
`;


class YoungPeopleView extends Component {
  render() {
    console.log(this.props);
    return (
      <Box full>
        <HeaderStyled size="small">
          <Title>iFuture</Title>
        </HeaderStyled>
        <ContentDiv>
          <Switch>
            <Route path="/yp" exact component={Home} />
            <Route path="/yp/course" component={CourseList} />
            <Route path="/yp/progress" component={Progress} />
          </Switch>
        </ContentDiv>
        <Box align="stretch" justify="end" flex="grow">
          <FooterMenu history={this.props.history} />
        </Box>
      </Box>
    );
  }
}

export default YoungPeopleView;
