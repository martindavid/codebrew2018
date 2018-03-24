import React from 'react';
import CustomCard from '../Layout/Card';
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';


const CourseList = () => (
  <CustomCard>
    <Link to="/yp/course/1">
      <CourseCard backgroundColor="#00BCD4" />
    </Link>
    <CourseCard backgroundColor="#E6EE9C" />
    <CourseCard backgroundColor="#C5E1A5" />
  </CustomCard>
);

export default CourseList;
