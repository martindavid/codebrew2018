import React, { Component } from 'react';
import styled from 'styled-components';
import CustomCard from '../Layout/Card';
import Box from 'grommet/components/Box';
import Checkbox from './Checkbox';
import Link from 'react-router-dom/Link';
import Button from 'grommet/components/Button';


const WistiaPaddingStyled = styled.div`
  padding:56.25% 0 0 0;
  position:relative;
  border: 1px;
  margin-top: 10px;
`;

const WistiaWrapperStyled = styled.div`
  height:100%;
  left:0;
  position:absolute;
  top:0;
  width:100%;
`;

const StyledCheckbox = styled.input`
-webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  height: 40px;
  width: 40px;
  transition: all 0.15s ease-out 0s;
  background: #cbd1d8 !important;
  border: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  margin-right: 0.5rem;
  outline: none;
  position: relative;
  padding: 0 !important;
  border-radius: 100% !important;
  float: left;
}
`;

const QuestionOne = () => (
  <div>
Question 1
    <br />
    <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <div className="question" style={{ marginBottom: '20px' }}>
      <div className="answer">
        <Box pad={{ between: 'medium' }}>
          <div>
            <StyledCheckbox
              id="answer1"
              type="radio"
              className="option-input radio"
              name="example"
            />
            <label htmlFor="answer1" className="answer-label"> Answer 1</label>
            <i className="fa fa-check" />
          </div>
          <div>
            <StyledCheckbox
              id="answer2"
              type="radio"
              className="option-input radio"
              name="example"
            />
            <label htmlFor="answer2" className="answer-label"> Answer 2</label>
          </div>
          <div>
            <StyledCheckbox
              id="answer3"
              type="radio"
              className="option-input radio"
              name="example"
            />
            <label htmlFor="answer3" className="answer-label"> Answer 2</label>
          </div>
        </Box>
      </div>
    </div>
  </div>
);

const QuestionTwo = () => (
  <div>
    Question 1
    <br />
    <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <div className="question" style={{ marginBottom: '20px' }}>
      <div className="answer">
        <Box pad={{ between: 'medium' }}>
          <div>
            <StyledCheckbox
              id="answer1"
              type="radio"
              className="option-input radio"
              name="example"
            />
            <label htmlFor="answer1" className="answer-label"> Answer 1</label>
          </div>
          <div>
            <StyledCheckbox
              id="answer2"
              type="radio"
              className="option-input radio"
              name="example"
            />
            <label htmlFor="answer2" className="answer-label"> Answer 2</label>
          </div>
          <div>
            <StyledCheckbox
              id="answer3"
              type="radio"
              className="option-input radio"
              name="example"
            />
            <label htmlFor="answer3" className="answer-label"> Answer 2</label>
          </div>
        </Box>
      </div>
    </div>
  </div>
);

const QuestionThree = () => (
  <div>
    Question 1
    <br />
    <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <div className="question" style={{ marginBottom: '20px' }}>
      <div className="answer">
        <Box pad={{ between: 'medium' }}>
          <div>
            <StyledCheckbox
              id="answer1"
              type="radio"
              className="option-input radio"
              name="example"
            />
            <label htmlFor="answer1" className="answer-label"> Answer 1</label>
          </div>
          <div>
            <StyledCheckbox
              id="answer2"
              type="radio"
              className="option-input radio"
              name="example"
            />
            <label htmlFor="answer2" className="answer-label"> Answer 2</label>
          </div>
          <div>
            <StyledCheckbox
              id="answer3"
              type="radio"
              className="option-input radio"
              name="example"
            />
            <label htmlFor="answer3" className="answer-label"> Answer 2</label>
          </div>
        </Box>
      </div>
    </div>
  </div>
);


class DetailPage extends Component {
  constructor() {
    super();
    this.state = {
      activeQuestion: 1,
    };
  }

  componentWillMount() {

  }

  render() {
    const { activeQuestion } = this.state;
    const { history } = this.props;

    return (
      <div>
        <h2 style={{ marginTop: '10px', marginLeft: '10px', marginBottom: '10px' }}>Course detail</h2>
        <Button
          href="#"
          style={{ marginLeft: '10px' }}
          onClick={() => {
          if (history) {
            history.push('/yp/course-list');
          }
        }}
        >
          <i className="fa fa-arrow-left" /> Back
        </Button>
        <WistiaPaddingStyled className="wistia_responsive_padding">
          <WistiaWrapperStyled className="wistia_responsive_wrapper">
            <div className="wistia_embed wistia_async_u99iorpkld videoFoam=true" style={{ height: '100%', width: '100%' }}>&nbsp;</div>
          </WistiaWrapperStyled>
        </WistiaPaddingStyled>
        <CustomCard>
          { activeQuestion === 1 && <QuestionOne />}
          <Box>
            <Button
              label="Check Answer"
              href="#"
              primary={false}
              secondary={false}
            />
          </Box>
        </CustomCard>
      </div>
    );
  }
}

export default DetailPage;
