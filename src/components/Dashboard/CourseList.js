import React from 'react';
import Box from 'grommet/components/Box';
import CustomCard from '../Layout/Card';
import CourseCard from './CourseCard';

const CourseList = props => (
  <CustomCard>
    <Box onClick={() => props.history.push('/yp/course/1')}>
      <CourseCard backgroundColor="#00BCD4" />
    </Box>
    <CourseCard backgroundColor="#E6EE9C" />
    <CourseCard backgroundColor="#C5E1A5" />
  </CustomCard>
);

export default CourseList;
