import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  padding: 10px;
  margin: 20px 20px 40px;
  text-align:center;
  box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

const CustomCard = ({ children, className }) => (
  <StyledBox className={className} >
    {children}
  </StyledBox>
);

export default CustomCard;
