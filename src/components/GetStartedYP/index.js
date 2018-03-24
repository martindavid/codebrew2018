// @flow
import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import Button from 'grommet/components/Button';
import { routes, routeForGetStartedYP } from '../../utils/routes';

type Props = {
  history: Object,
  match: Object,
};

function GetStartedYP(props: Props) {
  const { step } = props.match.params;
  return (
    <Box full pad="large">
      <Heading>Step {step}</Heading>
      <Label>Question</Label>
      <Box pad={{ between: 'medium' }}>
        <Button
          primary
          label="Next"
          onClick={() => props.history.push(routeForGetStartedYP(Number(step) + 1))}
        />
        {step === '1' ? (
          <Button label="Cancel" onClick={() => props.history.push(routes.getStarted)} />
        ) : (
          <Button
            label="Previous"
            onClick={() => props.history.push(routeForGetStartedYP(Number(step) - 1))}
          />
        )}
      </Box>
    </Box>
  );
}

export default GetStartedYP;
