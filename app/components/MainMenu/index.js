import React from 'react';
import { Menu } from 'antd';
import { SearchOutlined, HeartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MainMenu = ({ page }) => (
  <Menu
    mode="vertical"
    theme="dark"
    defaultSelectedKeys={[page]}
    defaultOpenKeys={[page]}
    style={{ height: '100%', borderRight: 0 }}
  >
    {[
      { icon: <SearchOutlined />, key: 'main', name: 'Search', to: '/' },
      {
        icon: <HeartOutlined />,
        key: 'favourites',
        name: 'Favourite',
        to: '/favourites',
      },
    ].map(menuItem => (
      <Menu.Item
        icon={menuItem.icon}
        active={page === menuItem.key}
        key={menuItem.key}
      >
        <Link to={menuItem.to}>{menuItem.name}</Link>
      </Menu.Item>
    ))}
  </Menu>
);

MainMenu.propTypes = {
  page: PropTypes.string,
};

export default MainMenu;
