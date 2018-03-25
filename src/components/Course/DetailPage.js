import React, { Component } from 'react';
import styled from 'styled-components';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import { Redirect } from 'react-router-dom';
import CustomCard from '../Layout/Card';

const WistiaPaddingStyled = styled.div`
  padding: 56.25% 0 0 0;
  position: relative;
  border: 1px;
  margin-top: 10px;
`;

const WistiaWrapperStyled = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
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

const parseLabelName = (name) => {
  switch (name) {
    case '1':
      return 'Biology 101';
    case '2':
      return 'Robotic 101';
    case '3':
      return 'Have Fun with Python';
    case '4':
      return 'Intro to Web Development';
    case '5':
      return 'Coding from Scratch';
    default:
      return '';
  }
};

const QuestionOne = () => (
  <div>
    Question 1
    <br />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <div className="question" style={{ marginBottom: '20px' }}>
      <div className="answer">
        <Box pad={{ between: 'medium' }}>
          <Box direction="row" responsive={false} pad={{ between: 'medium' }}>
            <Box>
              <StyledCheckbox
                id="answer1"
                type="radio"
                className="option-input radio"
                name="example"
              />
            </Box>
            <Box flex="grow">
              <label htmlFor="answer1" className="answer-label">
                {' '}
                Answer 1
              </label>
            </Box>
          </Box>
          <Box direction="row" responsive={false} pad={{ between: 'medium' }}>
            <Box>
              <StyledCheckbox
                id="answer2"
                type="radio"
                className="option-input radio"
                name="example"
              />
            </Box>
            <Box flex="grow">
              <label htmlFor="answer2" className="answer-label">
                {' '}
                Answer 2
              </label>
            </Box>
          </Box>
          <Box direction="row" responsive={false} pad={{ between: 'medium' }}>
            <Box>
              <StyledCheckbox
                id="answer3"
                type="radio"
                className="option-input radio"
                name="example"
              />
            </Box>
            <Box flex="grow">
              <label htmlFor="answer3" className="answer-label">
                {' '}
                Answer 3
              </label>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  </div>
);

const QuestionTwo = () => (
  <div>
    Question 2
    <br />
    <p>
      acon ipsum dolor amet ribeye venison cupim, doner leberkas salami shoulder filet mignon
      alcatra prosciutto pig strip steak. Buffalo bresaola tenderloin, hamburger chuck capicola
      frankfurter pastrami shankle bacon kielbasa pork belly spare ribs ham hock.
    </p>
    <div className="question" style={{ marginBottom: '20px' }}>
      <div className="answer">
        <Box pad={{ between: 'medium' }}>
          <Box direction="row" responsive={false} pad={{ between: 'medium' }}>
            <Box>
              <StyledCheckbox
                id="answer1"
                type="radio"
                className="option-input radio"
                name="example"
              />
            </Box>
            <Box flex="grow">
              <label htmlFor="answer1" className="answer-label">
                {' '}
                Answer 1
              </label>
            </Box>
          </Box>
          <Box direction="row" responsive={false} pad={{ between: 'medium' }}>
            <Box>
              <StyledCheckbox
                id="answer2"
                type="radio"
                className="option-input radio"
                name="example"
              />
            </Box>
            <Box flex="grow">
              <label htmlFor="answer2" className="answer-label">
                {' '}
                Answer 2
              </label>
            </Box>
          </Box>
          <Box direction="row" responsive={false} pad={{ between: 'medium' }}>
            <Box>
              <StyledCheckbox
                id="answer3"
                type="radio"
                className="option-input radio"
                name="example"
              />
            </Box>
            <Box flex="grow">
              <label htmlFor="answer3" className="answer-label">
                {' '}
                Answer 3
              </label>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  </div>
);

const QuestionThree = () => (
  <div>
    Question 3
    <br />
    <p>
      Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone
      mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque
      interloper chantey doubloon starboard grog black jack gangway rutters.
    </p>
    <div className="question" style={{ marginBottom: '20px' }}>
      <div className="answer">
        <Box pad={{ between: 'medium' }}>
          <Box direction="row" responsive={false} pad={{ between: 'medium' }}>
            <Box>
              <StyledCheckbox
                id="answer1"
                type="radio"
                className="option-input radio"
                name="example"
              />
            </Box>
            <Box flex="grow">
              <label htmlFor="answer1" className="answer-label">
                {' '}
                Answer 1
              </label>
            </Box>
          </Box>
          <Box direction="row" responsive={false} pad={{ between: 'medium' }}>
            <Box>
              <StyledCheckbox
                id="answer2"
                type="radio"
                className="option-input radio"
                name="example"
              />
            </Box>
            <Box flex="grow">
              <label htmlFor="answer2" className="answer-label">
                {' '}
                Answer 2
              </label>
            </Box>
          </Box>
          <Box direction="row" responsive={false} pad={{ between: 'medium' }}>
            <Box>
              <StyledCheckbox
                id="answer3"
                type="radio"
                className="option-input radio"
                name="example"
              />
            </Box>
            <Box flex="grow">
              <label htmlFor="answer3" className="answer-label">
                {' '}
                Answer 3
              </label>
            </Box>
          </Box>
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

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { activeQuestion } = this.state;
    const { history, match } = this.props;

    const { id } = match.params;

    if (activeQuestion === 4) {
      return <Redirect to={`/yp/course-list/${id}/finish`} />;
    }

    return (
      <div>
        <h2 style={{ marginTop: '10px', marginLeft: '10px', marginBottom: '10px' }}>
          {parseLabelName(id)}
        </h2>
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
            <div
              className="wistia_embed wistia_async_u99iorpkld videoFoam=true"
              style={{ height: '100%', width: '100%' }}
            >
              &nbsp;
            </div>
          </WistiaWrapperStyled>
        </WistiaPaddingStyled>
        <br />
        <Box pad="large">
          <CustomCard>
            {activeQuestion === 1 && <QuestionOne />}
            {activeQuestion === 2 && <QuestionTwo />}
            {activeQuestion === 3 && <QuestionThree />}
            <Box>
              <Button
                label={activeQuestion === 3 ? 'Finish' : 'Next'}
                primary={false}
                secondary={false}
                onClick={() => {
                  this.setState({ activeQuestion: this.state.activeQuestion + 1 });
                }}
              />
              <br />
              {activeQuestion > 1 && (
                <Button
                  label="Back"
                  primary={false}
                  secondary={false}
                  onClick={() => {
                    this.setState({ activeQuestion: this.state.activeQuestion - 1 });
                  }}
                />
              )}
            </Box>
          </CustomCard>
        </Box>
      </div>
    );
  }
}

export default DetailPage;
