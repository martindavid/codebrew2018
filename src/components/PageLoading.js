// @flow
import React from 'react';
import styled from 'styled-components';
import { CircularProgress } from 'material-ui/Progress';

const FullWidthContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export default function () {
  return (
    <FullWidthContainer>
      <CircularProgress size={64} />
    </FullWidthContainer>
  );
}
