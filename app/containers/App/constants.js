/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_HEROS = 'superheroweb-kencheung/App/LOAD_HEROS';
export const LOAD_HEROS_SUCCESS =
  'superheroweb-kencheung/App/LOAD_HEROS_SUCCESS';
export const LOAD_HEROS_ERROR = 'superheroweb-kencheung/App/LOAD_HEROS_ERROR';

export const GET_FAVOURITE_HEROS =
  'superheroweb-kencheung/App/GET_FAVOURITE_HEROS';

export const ADD_FAVOURITE_HERO =
  'superheroweb-kencheung/App/ADD_FAVOURITE_HERO';

export const REMOVE_FAVOURITE_HERO =
  'superheroweb-kencheung/App/REMOVE_FAVOURITE_HERO';
