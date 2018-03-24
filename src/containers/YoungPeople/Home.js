import React, { Component } from 'react';

import TutorCard from '../../components/Dashboard/TutorCard';
import CourseList from '../../components/Dashboard/CourseList';
import ActionChecklist from '../../components/Dashboard/ActionChecklist';

class Home extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <div>
        <ActionChecklist />
        <TutorCard />
        <CourseList />
      </div>
    );
  }
}

export default Home;
