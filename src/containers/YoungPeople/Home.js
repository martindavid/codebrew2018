// @flow
import React, { Component } from 'react';

import TutorCard from '../../components/Dashboard/TutorCard';
import CourseList from '../../components/Dashboard/CourseList';
import ActionChecklist from '../../components/Dashboard/ActionChecklist';

type Props = {
  history: Object,
};

class Home extends Component {
  componentWillMount() {}

  props: Props;

  render() {
    return (
      <div>
        <ActionChecklist />
        <TutorCard history={this.props.history} />
        <CourseList />
      </div>
    );
  }
}

export default Home;
