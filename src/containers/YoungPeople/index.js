// @flow

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Box from 'grommet/components/Box';

import Header from '../../components/Layout/Header';
import Home from './Home';
import CourseList from './CourseList';
import Progress from './Progress';
import FooterMenu from '../../components/Layout/FooterMenu';
import CourseDetail from '../../components/Course/DetailPage';

type Props = {
  history: Object,
  match: Object,
};

const ContentDiv = styled.div`
  margin-bottom: 50px;
  margin-top: 65px;
`;

const YoungPeopleView = ({ history, match }: Props) => (
  <Box full>
    <Header label="iFuture" />
    <ContentDiv>
      <Switch>
        <Route path="/yp" exact component={Home} />
        <Route path="/yp/course-list" component={CourseList} />
        <Route path="/yp/course/:id" component={CourseDetail} />
        <Route path="/yp/progress" component={Progress} />
      </Switch>
    </ContentDiv>
    <Box align="stretch" justify="end" flex="grow">
      <FooterMenu history={history} match={match} />
    </Box>
  </Box>
);

export default YoungPeopleView;
