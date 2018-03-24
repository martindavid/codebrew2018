// @flow
import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import RadioButton from 'grommet/components/RadioButton';
import Button from 'grommet/components/Button';
import { routes } from '../../utils/routes';

type Props = {
  history: Object,
  setEducation: string => void,
};

class GetStartedEducationLevel extends Component {
  state = {
    selected: 0,
  };

  getEducation = () => {
    switch (this.state.selected) {
      case 0:
        return 'Primary School';
      case 1:
        return 'Junior High School';
      case 2:
        return 'High School';
      default:
        return 'Primary School';
    }
  };

  submit = () => {
    this.props.setEducation(this.getEducation());
    this.props.history.push(routes.getStartedSubjects);
  };

  props: Props;

  render() {
    return (
      <Box full pad="large">
        <Heading>Education</Heading>
        <Box flex="grow" justify="center">
          <Label>What is your last education level?</Label>
          <Box pad={{ between: 'small' }}>
            <RadioButton
              id="option-1"
              label="Primary School"
              checked={this.state.selected === 0}
              onChange={() => this.setState({ selected: 0 })}
            />
            <RadioButton
              id="option-2"
              label="Junior High School"
              checked={this.state.selected === 1}
              onChange={() => this.setState({ selected: 1 })}
            />
            <RadioButton
              id="option-3"
              label="High School"
              checked={this.state.selected === 2}
              onChange={() => this.setState({ selected: 2 })}
            />
          </Box>
        </Box>
        <Box pad={{ between: 'small' }}>
          <Button primary label="Next" onClick={this.submit} />
          <Button label="Previous" onClick={() => {}} />
        </Box>
      </Box>
    );
  }
}

export default GetStartedEducationLevel;
