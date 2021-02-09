import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  LOAD_HEROS,
  LOAD_HEROS_SUCCESS,
  LOAD_HEROS_ERROR,

  LOAD_CAROUSEL,
  LOAD_CAROUSEL_SUCCESS,
  LOAD_CAROUSEL_ERROR,
} from 'containers/App/constants';

import request from 'utils/request';

import CarouselConfig from 'carouselConfig.json';

const fb_access_token = '10221594164217902';
const endpoint = `https://www.superheroapi.com/api.php/${fb_access_token}`;

export function* searchHeros(action) {
  const { name } = action;
  const requestURL = `${endpoint}/search/${name}`;

  console.log('saga', requestURL);

  try {
    // Call our request helper (see 'utils/request')
    const heros = yield call(request, requestURL);
    yield put({
      type: LOAD_HEROS_SUCCESS,
      data: heros && heros.results,
    });
  } catch (error) {
    yield put({
      type: LOAD_HEROS_ERROR,
      error,
    });
  }
}

export function* getCarousel(action) {
  const requestURL = process.env.NODE_ENV == 'development' ? 'https://6021fe95ae8f8700177deddf.mockapi.io/api/v1/heros': `${endpoint}/search/${CarouselConfig.topic}`;

  console.log('saga', requestURL);

  try {
    // Call our request helper (see 'utils/request')
    const heros = yield call(request, requestURL);
    yield put({
      type: LOAD_CAROUSEL_SUCCESS,
      data: heros && heros.results.slice(0, CarouselConfig.maxItems),
    });
  } catch (error) {
    yield put({
      type: LOAD_CAROUSEL_ERROR,
      error,
    });
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* appData() {
  yield takeLatest(LOAD_HEROS, searchHeros);
  yield takeLatest(LOAD_CAROUSEL, getCarousel);
}
