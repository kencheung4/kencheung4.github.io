import React from 'react';
import { render } from 'react-testing-library';

import Reorderable from '../index';

describe('<Reorderable />', () => {
  it('should have draggable attribute', () => {
    const { container } = render(<Reorderable itemPosition={0} moveItem={()=>{}}>test</Reorderable>);
    const { childNodes } = container.querySelector('div');
    expect(childNodes).toHaveAttribute('draggable');
  });
});
