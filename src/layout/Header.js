import styled, { css } from 'styled-components';

import { getters as g } from '../util';
import { shadow2dp, materialAnimationDefault } from '../mixins';

const headerStyle = css`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  box-sizing: border-box;
  flex-shrink: 0;

  width: 100%;
  margin: 0;
  padding: 0;
  border: none;
  min-height: ${g.layoutDesktopHeaderHeight}px;
  max-height: 1000px;
  z-index: 3;

  background-color: ${g.layoutHeaderBgColor};
  color: ${g.layoutHeaderTextColor};

  ${shadow2dp()};
  ${materialAnimationDefault()}
  transition-property: max-height, box-shadow;

  ${({ transparent }) => transparent && css`
    background-color: transparent;
    box-shadow: none;
  `}

  ${({ seamed }) => seamed && css`
    box-shadow: none;
  `}

  ${({ scroll }) => scroll && `
    box-shadow: none;
  `}
`;

export default styled.header`${headerStyle}`;
