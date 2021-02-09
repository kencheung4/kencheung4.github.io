/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_HEROS,
  LOAD_CAROUSEL,
  GET_FAVOURITE_HEROS,
  ADD_FAVOURITE_HERO,
  REMOVE_FAVOURITE_HERO,
} from './constants';

export function loadHeros(name) {
  return {
    type: LOAD_HEROS,
    name,
  };
}

export function loadCarousel() {
  return {
    type: LOAD_CAROUSEL,
  }
}

export function getFavourites() {
  return {
    type: GET_FAVOURITE_HEROS,
  };
}

export function addFavouriteHero(id) {
  return {
    type: ADD_FAVOURITE_HERO,
    id,
  };
}

export function removeFavouriteHero(id) {
  return {
    type: REMOVE_FAVOURITE_HERO,
    id,
  };
}
