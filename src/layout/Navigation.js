import styled from 'styled-components';
import { typoBody1 } from '../mixins';
import { getters as g } from '../util';

export const Navigation = styled.div`
  display: flex;
  flex-wrap: nowrap;
  box-sizing: border-box;
`;

export const NavigationLink = styled.div`
  color: ${g.layoutTextColor};
  text-decoration: none;
  margin: 0;
  ${typoBody1()};

  display: block;
  color: ${g.layoutHeaderTextColor};
  line-height: ${g.layoutHeaderDesktopRowHeight};
  padding: 0 24px;

  @media screen and (max-width: ${g.layoutScreenSizeThreshold}) {
    line-height: ${g.layoutHeaderMobileRowHeight};
    padding: 0 ${g.layoutHeaderMobileIndent};
  }
`;
