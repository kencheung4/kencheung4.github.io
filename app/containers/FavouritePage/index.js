/*
 * MainPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { Row, Col, message, Typography } from 'antd';

const { Title, Text } = Typography;

import { useInjectSaga } from 'utils/injectSaga';

import CommonLayout from 'components/CommonLayout';
import HeroItem from 'containers/HeroItem';

import { getFavourites } from '../App/actions';

import saga from '../App/saga';

export function FavouritePage({ getFavourites, items }) {
  useInjectSaga({ key: 'global', saga });

  useEffect(() => {
    getFavourites();
  }, []);

  return (
    <CommonLayout page="favourites">
      <Title level={2}>My favourite heros</Title>
      <Row gutter={[16, 16]}>
        {items && items.length > 0
          ? items.map(item => (
            <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={3}>
              <HeroItem
                {...item}
                onRemove={(id, name) => message.success(`removed ${name}`)}
              />
            </Col>
          ))
          : <Text type="secondary">No record! Back to <Link to="/">Search</Link></Text>
        }
      </Row>
    </CommonLayout>
  );
}

FavouritePage.propTypes = {};

const mapStateToProps = state => ({
  items: state.global.favouritesData.items,
});

export function mapDispatchToProps(dispatch) {
  return {
    getFavourites: () => dispatch(getFavourites()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(FavouritePage);
