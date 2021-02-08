import React from 'react';
import { Layout } from 'antd';

import MainMenu from '../MainMenu';
const { Content, Sider } = Layout;

const CommonLayout = props => (
  <Layout>
    <Sider width={200} breakpoint="lg">
      <MainMenu page={props.page} />
    </Sider>
    <Layout style={{ padding: '0 24px 24px' }}>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 800,
        }}
      >
        {props.children}
      </Content>
    </Layout>
  </Layout>
);

export default CommonLayout;
