// @flow

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Box from 'grommet/components/Box';

import Header from '../../components/Layout/Header';
import ComingSoon from '../../components/ComingSoon';
import Home from './Home';
import CourseList from './CourseList';
import Leaderboard from '../../components/Leaderboard';
import FooterMenu from '../../components/Layout/FooterMenu';
import CourseDetail from '../../components/Course/DetailPage';
import MeetingNotes from '../../components/MeetingNotes';
import MeetingComplete from '../../components/MeetingComplete';
import bg from '../../assets/bg.png';
import CourseListComplete from '../../components/CourseListComplete';

type Props = {
  history: Object,
  location: Object,
  match: Object,
};

const ContentDiv = styled.div`
  margin-bottom: 65px;
  margin-top: 65px;
`;

const YoungPeopleView = ({ history, location, match }: Props) => {
  let headerLabel;

  if (location.pathname.includes('home')) {
    headerLabel = 'Home';
  } else if (location.pathname.includes('course')) {
    headerLabel = 'Courses';
  } else if (location.pathname.includes('progress')) {
    headerLabel = 'Leaderboard';
  } else if (location.pathname.includes('profile')) {
    headerLabel = 'Profile';
  } else {
    headerLabel = 'iFuture';
  }

  return (
    <Box full texture={location.pathname === '/yp/home' && bg}>
      <Header label={headerLabel} />
      <ContentDiv>
        <Switch>
          <Route path="/yp/home/meeting-notes" component={MeetingNotes} />
          <Route path="/yp/home/complete" component={MeetingComplete} />
          <Route path="/yp/home" component={Home} />
          <Route path="/yp/course-list" exact component={CourseList} />
          <Route path="/yp/course-list/:id" exact component={CourseDetail} />
          <Route path="/yp/course-list/:id/finish" component={CourseListComplete} />
          <Route path="/yp/progress" component={Leaderboard} />
          <Route path="/yp/profile" component={ComingSoon} />
        </Switch>
      </ContentDiv>
      <Box align="stretch" justify="end" flex="grow">
        <FooterMenu history={history} match={match} />
      </Box>
    </Box>
  );
};

export default YoungPeopleView;
