import React from 'react';
import { render } from 'react-testing-library';

import CommonLayout from '../index';

describe('<CommonLayout />', () => {
  it('should render a sider', () => {
    const { container } = render(<CommonLayout>{children}</CommonLayout>);
    const { childNodes } = container.querySelector('.ant-layout-sider');
    expect(childNodes).toHaveLength(1);
  });

  it('should render its children', () => {
    const children = 'Text';
    const { container, queryByText } = render(
      <CommonLayout>{children}</CommonLayout>,
    );
    const { childNodes } = container.querySelector('.ant-layout-content');
    expect(childNodes).toHaveLength(1);
    expect(queryByText(children)).not.toBeNull();
  });
});
