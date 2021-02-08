import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';

import { HeartTwoTone, HeartOutlined } from '@ant-design/icons';

import { removeFavouriteHero, addFavouriteHero } from '../App/actions';

const { Meta } = Card;

export function HeroItem(props) {
  const { image, name, id, add, remove, isFav, onAdd, onRemove } = props;

  const handleRemove = useCallback(() => {
    remove(id);
    !!onRemove && onRemove(id, name);
  }, [id])

  const handleAdd = useCallback(() => {
    add(id);
    !!onAdd && onAdd(id, name);
  }, [id]);


  return (
    <Card
      key={id}
      hoverable
      style={{ width: '100%' }}
      cover={<img alt={name} src={image && image.url} />}
      actions={[
        isFav ? (
          <HeartTwoTone onClick={handleRemove} color="red" />
        ) : (
          <HeartOutlined onClick={handleAdd} />
        ),
      ]}
    >
      <Meta title={name} />
    </Card>
  );
}

const mapStateToProps = (state, ownProps) => ({
  isFav:
    state.global.favouritesData &&
    state.global.favouritesData.items.filter(item => item.id == ownProps.id)
      .length > 0,
});

function mapDispatchToProps(dispatch) {
  return {
    add: id => dispatch(addFavouriteHero(id)),
    remove: id => dispatch(removeFavouriteHero(id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withConnect(HeroItem);
