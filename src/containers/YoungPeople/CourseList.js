import React, { Component } from 'react';
import CourseCard from '../../components/Dashboard/CourseCard';
import { Link } from 'react-router-dom';

class CourseList extends Component {
  render() {
    return (
      <div>
        <h2>Courses</h2>
        <br />
        <Link to="/yp/course-list/1">
          <CourseCard
            value={40}
            courseName="Biology 101"
            backgroundColor="#00BCD4"
          />
        </Link>
        <CourseCard
          value={100}
          courseName="Robotic 101"
          backgroundColor="#E6EE9C"
        />
        <CourseCard
          courseName="Have fun with Python"
          value={70}
          backgroundColor="#C5E1A5"
        />
        <CourseCard
          courseName="Have fun with Python"
          value={70}
          backgroundColor="#C5E1A5"
        />
        <CourseCard
          courseName="Have fun with Python"
          value={70}
          backgroundColor="#C5E1A5"
        />
      </div>
    );
  }
}

export default CourseList;
