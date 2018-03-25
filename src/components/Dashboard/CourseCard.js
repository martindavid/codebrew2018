import React from 'react';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';
import styled from 'styled-components';

const CustomMeter = styled(Meter)`
  margin-top: 20px;
  & > div > div > svg {
    width: 50px !important;
    height: 50px !important;
  }
`;

const CustomValue = styled(Value)`
  & > div > div {
    font-size: 10pt;
    font-weight: 10;
    margin-bottom: 12px;
  } 
`;

const CourseCard = ({ backgroundColor, value, courseName }) => (
  <div className="course-card">
    <div className="progress" style={{ backgroundColor }}>
      <CustomMeter
        type="circle"
        size="xsmall"
        label={<CustomValue
          value={value}
          units="%"
        />}
        value={value}
      />
    </div>
    <span className="course-label">Course</span>
    <h4>{courseName}</h4>
  </div>
);

export default CourseCard;
