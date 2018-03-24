import React from 'react';
import Box from 'grommet/components/Box';
import CustomCard from '../../components/Layout/Card';

import './checkbox.css';

const ActionChecklist = () => (
  <CustomCard>
    <h3>Your Action This Week</h3>
    <Box pad={{ between: 'medium' }}>
      <ul className="list">
        <li className="list-item">
          <input type="checkbox" className="hidden-box" id="first" />
          <label htmlFor="first" className="check--label">
            <span className="check--label-box" />
            <span className="check--label-text">Action 1</span>
          </label>
        </li>
      </ul>
      <ul className="list">
        <li className="list-item">
          <input type="checkbox" className="hidden-box" id="second" />
          <label htmlFor="second" className="check--label">
            <span className="check--label-box" />
            <span className="check--label-text">Action 2</span>
          </label>
        </li>
      </ul>
      <ul className="list">
        <li className="list-item">
          <input type="checkbox" className="hidden-box" id="third" />
          <label htmlFor="third" className="check--label">
            <span className="check--label-box" />
            <span className="check--label-text">Action 3</span>
          </label>
        </li>
      </ul>
    </Box>
  </CustomCard>
);

export default ActionChecklist;
