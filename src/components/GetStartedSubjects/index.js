// @flow
import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import CheckBox from 'grommet/components/CheckBox';
import Button from 'grommet/components/Button';
import { routes } from '../../utils/routes';

type Props = {
  history: Object,
  setSubjects: string => void,
};

const options = ['Science', 'Technology', 'Engineering', 'Mathematics'];

class GetStartedEducationLevel extends Component {
  state = {
    selected: [],
  };

  submit = () => {
    this.props.setSubjects(this.state.selected);
    this.props.history.push(routes.getStartedMatch);
  };

  props: Props;

  render() {
    return (
      <Box full pad="large">
        <Heading>Education</Heading>
        <Box flex="grow" justify="center">
          <Label>Which subjects do you feel interested in?</Label>
          <Box pad={{ between: 'small' }}>
            {options.map(el => (
              <CheckBox
                key={el}
                checked={this.state.selected.includes(el)}
                label={el}
                onChange={() =>
                  this.setState({
                    selected: [...this.state.selected.filter(item => item !== el), ...[el]],
                  })
                }
              />
            ))}
          </Box>
        </Box>
        <Box pad={{ between: 'small' }}>
          <Button primary label="Next" onClick={this.submit} />
          <Button
            label="Previous"
            onClick={() => this.props.history.push(routes.getStartedEducationLevel)}
          />
        </Box>
      </Box>
    );
  }
}

export default GetStartedEducationLevel;
