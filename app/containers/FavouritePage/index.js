import React, { useEffect, useCallback, memo } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { Row, Col, message, Typography } from 'antd';

const { Title, Text } = Typography;

import { useInjectSaga } from 'utils/injectSaga';

import CommonLayout from 'components/CommonLayout';
import HeroItem from 'containers/HeroItem';
import Reorderable from 'components/Reorderable';

import { getFavourites } from '../App/actions';

import saga from '../App/saga';

export function FavouritePage({ getFavourites, items }) {

  const [sortableItems, setSortableItems] = React.useState(items || []);

  useInjectSaga({ key: 'global', saga });

  useEffect(() => {
    getFavourites();
  }, []);

  useEffect(() => {
    setSortableItems(items);
  }, [items]);

  const handleMoveHeroItem = useCallback((dragIndex, hoverIndex) => {
    let newItems = [...sortableItems];
    let deletedItems = newItems.splice(dragIndex, 1);
    newItems.splice(hoverIndex, 0, deletedItems[0]);
    setSortableItems(newItems);
  }, [sortableItems]);

  return (
    <CommonLayout page="favourites">
      <Title level={2}>My favourite heros</Title>
      <Row gutter={[16, 16]}>
        {sortableItems && sortableItems.length > 0
          ? sortableItems.map((item, index) => (
            <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={3}>
              <Reorderable key={index} itemPosition={index} moveItem={handleMoveHeroItem}>
                <HeroItem
                  {...item}
                  onRemove={(id, name) => message.success(`removed ${name}`)}
                />
              </Reorderable>
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
