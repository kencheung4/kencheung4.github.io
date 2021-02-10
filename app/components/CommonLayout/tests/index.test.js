import React from 'react';
import { render } from 'react-testing-library';
import { BrowserRouter } from 'react-router-dom';


import CommonLayout from '../index';

describe('<CommonLayout />', () => {
  it('should render a sider', () => {
    const { container } = render(
      <BrowserRouter>
        <CommonLayout></CommonLayout>
      </BrowserRouter>
    );
    const { childNodes } = container.querySelector('.ant-layout-sider');
    expect(childNodes).toHaveLength(1);
  });

  it('should render its children', () => {
    const children = 'Text';
    const { container, queryByText } = render(
      <BrowserRouter>
        <CommonLayout>{children}</CommonLayout>
      </BrowserRouter>
    );
    const { childNodes } = container.querySelector('.ant-layout-content');
    expect(childNodes).toHaveLength(1);
    expect(queryByText(children)).not.toBeNull();
  });
});
