import styled from 'styled-components';
import { getters as g } from '../util';

export default styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-shrink: 0;
  box-sizing: border-box;
  align-self: stretch;
  align-items: center;
  height: ${g.layoutHeaderDesktopRowHeight}px;
  margin: 0;
  padding: 0 ${g.layoutHeaderDesktopIndent}px 0 ${g.layoutHeaderDesktopBaseline}px;

  & > * {
    flex-shrink: 0;
  }
`;
