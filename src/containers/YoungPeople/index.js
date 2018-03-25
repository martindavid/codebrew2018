// @flow

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Box from 'grommet/components/Box';

import Header from '../../components/Layout/Header';
import ComingSoon from '../../components/ComingSoon';
import Home from './Home';
import CourseList from './CourseList';
import Progress from './Progress';
import FooterMenu from '../../components/Layout/FooterMenu';
import CourseDetail from '../../components/Course/DetailPage';
import MeetingNotes from '../../components/MeetingNotes';
import MeetingComplete from '../../components/MeetingComplete';
import bg from '../../assets/bg.png';

type Props = {
  history: Object,
  match: Object,
};

const ContentDiv = styled.div`
  margin-bottom: 65px;
  margin-top: 65px;
`;

const YoungPeopleView = ({ history, location, match }: Props) => (
  <Box full texture={location.pathname === '/yp/home' && bg}>
    <Header label="iFuture" />
    <ContentDiv>
      <Switch>
        <Route path="/yp/home/meeting-notes" component={MeetingNotes} />
        <Route path="/yp/home/complete" component={MeetingComplete} />
        <Route path="/yp/home" component={Home} />
        <Route path="/yp/course-list" exact component={CourseList} />
        <Route path="/yp/course-list/:id" component={CourseDetail} />
        <Route path="/yp/progress" component={ComingSoon} />
        <Route path="/yp/profile" component={ComingSoon} />
      </Switch>
    </ContentDiv>
    <Box align="stretch" justify="end" flex="grow">
      <FooterMenu history={history} match={match} />
    </Box>
  </Box>
);

export default YoungPeopleView;
