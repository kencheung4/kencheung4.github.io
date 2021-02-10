import React from 'react';
import { render } from 'react-testing-library';

import CarouselItem from '../index';

describe('<CarouselItem />', () => {
  it('should render a image inside', () => {
    const { container } = render(<CarouselItem image={{ url: "http://localhost/test.png" }}/>);
    const node = container.querySelector('img');
    expect(node.src).toBe("http://localhost/test.png");
  });
});
