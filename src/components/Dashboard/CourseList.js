import React from 'react';
import Box from 'grommet/components/Box';
import CustomCard from '../Layout/Card';
import CourseCard from './CourseCard';

const CourseList = props => (
  <CustomCard>
    <Box onClick={() => props.history.push('/yp/course/1')}>
      <CourseCard
        value={40}
        courseName="Biology 101"
        backgroundColor="#00BCD4"
      />
    </Box>
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
