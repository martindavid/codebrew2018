import React, { Component } from 'react';
import CustomCard from '../Layout/Card';
import CourseCard from './CourseCard';


class CourseList extends Component {
  render() {
    return (
      <CustomCard>
        <CourseCard backgroundColor="#00BCD4" />
        <CourseCard backgroundColor="#E6EE9C" />
        <CourseCard backgroundColor="#C5E1A5" />
      </CustomCard>
    );
  }
}

export default CourseList;
