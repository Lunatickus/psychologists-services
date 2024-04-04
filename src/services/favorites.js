import { STORAGE_KEY } from "./keys";
import { filterDefinition, sortByKey } from "./psychologists";

export const getFavoritesByFilterFirstThree = (filter) => {
  const req = filterDefinition(filter);

  const snapshots = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
  const ordered = sortByKey(snapshots, req);
  const resp = [...ordered].slice(0, 3);
  return resp;
};

export const getFavoritesByFilterFirstThreeReverse = (filter) => {
  const req = filterDefinition(filter);

  const snapshots = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
  const ordered = sortByKey(snapshots, req);
  const resp = [...ordered].reverse().slice(0, 3);
  return resp;
};

export const getAllFavorites = () => {
  const favorites = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
  return favorites;
};

export const getFavoritesByFilterAll = (filter) => {
  const req = filterDefinition(filter);
  const snapshots = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
  const ordered = sortByKey(snapshots, req);
  return ordered;
};

export const getFavoritesByFilterReverse = (filter) => {
  const req = filterDefinition(filter);
  const snapshots = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
  const ordered = sortByKey(snapshots, req);
  const resp = [...ordered].reverse();
  return resp;
};
