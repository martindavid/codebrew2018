import React from 'react';
import CustomCard from '../Layout/Card';
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';


const CourseList = () => (
  <CustomCard>
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
  </CustomCard>
);

export default CourseList;
