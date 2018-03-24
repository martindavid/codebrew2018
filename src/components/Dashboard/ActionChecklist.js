import React from 'react';
import Box from 'grommet/components/Box';
import CheckBox from 'grommet/components/CheckBox';
import CustomCard from '../../components/Layout/Card';

const ActionChecklist = () => (
  <CustomCard>
    <h3>Your Action This Week</h3>
    <Box pad={{ between: 'medium' }}>
      <CheckBox
        label="Action 1"
        toggle={false}
      />
      <CheckBox
        label="Action 2"
        toggle={false}
      />
      <CheckBox
        label="Action 3"
        toggle={false}
      />
    </Box>
  </CustomCard>
);

export default ActionChecklist;
