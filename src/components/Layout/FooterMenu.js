import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import HomeIcon from 'grommet/components/icons/base/Home';
import BookIcon from 'grommet/components/icons/base/Book';
import PieChartIcon from 'grommet/components/icons/base/PieChart';
import UserIcon from 'grommet/components/icons/base/User';
import styled from 'styled-components';

const MenuBox = styled.div`
  padding: 10px;
  width: 100%;
  text-align: center;
  background-color: #ff567e;

  &:hover {
    background-color: grey;
  }
`;

class FooterMenu extends Component {
  componentWillMount() {}

  render() {
    const { history } = this.props;

    return (

      <Box
        direction="row"
        responsive={false}
        style={{ position: 'fixed', bottom: 0, width: '100%' }}
        // justify="between"
        // pad={{ between: 'medium' }}
      >
        <MenuBox>
          <Anchor
            href="#"
            icon={<HomeIcon />}
            onClick={() => { history.push('/yp'); }}
          />
        </MenuBox>
        <MenuBox>
          <Anchor
            href="#"
            icon={<BookIcon />}
            onClick={() => { history.push('/yp/course'); }}
          />
        </MenuBox>
        <MenuBox>
          <Anchor
            href="#"
            icon={<PieChartIcon />}
            onClick={() => { history.push('/yp/progress'); }}
          />
        </MenuBox>
        <MenuBox>
          <Anchor
            href="#"
            icon={<UserIcon />}
            onClick={() => { history.push('/yp/profile'); }}
          />
        </MenuBox>
      </Box>
    );
  }
}

export default FooterMenu;
