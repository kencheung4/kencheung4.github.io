/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  LOAD_HEROS,
  LOAD_HEROS_SUCCESS,
  LOAD_HEROS_ERROR,
} from 'containers/App/constants';

import request from 'utils/request';

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

/**
 * Root saga manages watcher lifecycle
 */
export default function* appData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_HEROS, searchHeros);
}
