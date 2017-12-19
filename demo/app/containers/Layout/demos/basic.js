import React from 'react';
import styled from 'styled-components';

import {
  Header,
  HeaderRow,
  Navigation,
  NavigationLink,
  Spacer,
  LayoutTitle,
} from 'material-components';

const Wrapper = styled.div`
  position: relative;
  height: 300px;
  width: 600px;
  background: url('https://source.unsplash.com/JoH60FhTp50') center/cover;
`;

const demo = () => (
  <Wrapper>
    <Header transparent>
      <HeaderRow>
        <LayoutTitle>Title</LayoutTitle>
        <Spacer />
        <Navigation>
          <NavigationLink>Link 1</NavigationLink>
          <NavigationLink>Link 2</NavigationLink>
          <NavigationLink>Link 3</NavigationLink>
        </Navigation>
      </HeaderRow>
    </Header>
  </Wrapper>
);
const caption = 'Transparent Header';
const code = `
<Header transparent>
  <HeaderRow>
    <LayoutTitle>Title</LayoutTitle>
    <Spacer />
    <Navigation />
      <NavigationLink>Link 1</NavigationLink>
      <NavigationLink>Link 2</NavigationLink>
      <NavigationLink>Link 3</NavigationLink>
    <Navigation />
  </HeaderRow>
</Header>
`;

export default { demo, caption, code };
