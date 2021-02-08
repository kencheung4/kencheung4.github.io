/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_HEROS,
  LOAD_HEROS_SUCCESS,
  LOAD_HEROS_ERROR,
  GET_FAVOURITE_HEROS,
  ADD_FAVOURITE_HERO,
  REMOVE_FAVOURITE_HERO,
} from './constants';

// The initial state of the App
export const initialState = {
  herosData: {
    items: [],
    loading: false,
    error: null,
  },
  favouritesData: {
    items: [],
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_HEROS:
        console.log('LOAD heros');
        draft.herosData.loading = true;
        draft.herosData.error = false;
        draft.herosData.items = [];
        break;

      case LOAD_HEROS_SUCCESS:
        draft.herosData.loading = false;
        draft.herosData.error = null;
        draft.herosData.items = action.data;
        break;

      case LOAD_HEROS_ERROR:
        draft.herosData.loading = false;
        draft.herosData.error = action.error;
        draft.herosData.items = [];
        break;

      case GET_FAVOURITE_HEROS:
        try {
          draft.favouritesData.items = JSON.parse(localStorage.getItem('hero-favourites'));
        } catch (err) {
          console.log(err);
          draft.favouritesData.items = [];
        }
        break;

      case ADD_FAVOURITE_HERO:
        const newAddItems = [
          ...draft.favouritesData.items,
          draft.herosData.items.filter(item => item.id == action.id)[0],
        ];
        draft.favouritesData.items = newAddItems;
        localStorage.setItem('hero-favourites', JSON.stringify(newAddItems));
        break;

      case REMOVE_FAVOURITE_HERO:
        const index = draft.favouritesData.items
          .map(item => item.id)
          .indexOf(action.id);
        const newRemovedItems = draft.favouritesData.items.splice(index, 1);
        localStorage.setItem(
          'hero-favourites',
          JSON.stringify(draft.favouritesData.items),
        );
        break;
    }
  });

export default appReducer;
