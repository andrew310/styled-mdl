import React, { Component } from 'react';

import DemoPage from 'components/DemoPage';

import basic from './demos/basic';

const title = 'Layout';
const subtitle = '';
const demos = [{ demos: [basic] }];

// eslint-disable-next-line react/prefer-stateless-function
export default class Layout extends Component {
  render() {
    return <DemoPage title={title} subtitle={subtitle} demoGroups={demos} />;
  }
}
