import React, { Component } from 'react';
import Box from 'grommet/components/Box';

import TutorCard from '../../components/Dashboard/TutorCard';
import CourseList from '../../components/Dashboard/CourseList';
import ActionChecklist from '../../components/Dashboard/ActionChecklist';

class Home extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <div>
        <TutorCard />
        <ActionChecklist />
        <CourseList />
      </div>
    );
  }
}

export default Home;
