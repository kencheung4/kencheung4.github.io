/*
 * MainPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { Row, Col, Spin, Alert, message, Input, Typography } from 'antd';

const { Search } = Input;
const { Text } = Typography;

import { useInjectSaga } from 'utils/injectSaga';

import CommonLayout from 'components/CommonLayout';
import LoadingIndicator from 'components/LoadingIndicator';

import HeroItem from 'containers/HeroItem';
import { loadHeros } from '../App/actions';

import saga from '../App/saga';

const defaultSearch = 'man';

export function MainPage({ loadHeros, heroData }) {
  useInjectSaga({ key: 'global', saga });

  const { loading, error, items } = heroData;
  const [search, setSearch] = React.useState(defaultSearch);

  useEffect(() => {
    loadHeros(search);
  }, [search]);

  const onSearch = value => setSearch(value);

  return (
    <CommonLayout page="main">
      <Search placeholder="input hero name" onSearch={onSearch} enterButton />  
      <Text> Search results for: {search}</Text>
      { !!error 
        && <Alert
            message="Error"
            description="Error Loading Heros"
            type="error"
        />
        }
      { loading ?
        <LoadingIndicator />
        : <Row gutter={[16, 16]}>
          {items &&
            items.map(item => (
              <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={3}>
                <HeroItem 
                    {...item} 
                    onAdd={(id, name) => message.success(`added ${name}`)} 
                    onRemove={(id, name) => message.success(`removed ${name}`)}
                />
              </Col>
            ))}
        </Row>
      }
    </CommonLayout>
  );
}

MainPage.propTypes = {};

const mapStateToProps = state => ({
  heroData: state.global.herosData,
});

export function mapDispatchToProps(dispatch) {
  return {
    loadHeros: name => dispatch(loadHeros(name)),
    addFavouriteHero: id => dispatch(addFavouriteHero(id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MainPage);
