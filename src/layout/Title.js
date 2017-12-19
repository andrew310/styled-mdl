import styled from 'styled-components';
import { typoTitle } from '../mixins';

export default styled.span`
  display: block;
  position: relative;

  ${typoTitle()};
  font-weight: 400;
  box-sizing: border-box;
  `;
