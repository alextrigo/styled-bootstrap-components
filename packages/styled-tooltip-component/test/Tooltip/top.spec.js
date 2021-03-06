
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Tooltip } from '../../src';

test('Styles matches Tooltip top', () => {
  const tree = renderer.create(<Tooltip top />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding', '0.4rem 0');
});
