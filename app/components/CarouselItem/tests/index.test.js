import React from 'react';
import { render } from 'react-testing-library';

import CarouselItem from '../index';

describe('<CarouselItem />', () => {
  it('should render a image inside', () => {
    const { container } = render(<CarouselItem image={{ url: "abc" }}/>);
    const { childNodes } = container.querySelector('img');
    expect(childNodes).toHaveLength(1);
  });
});
