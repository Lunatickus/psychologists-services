import {
  get,
  limitToFirst,
  limitToLast,
  orderByChild,
  query,
  ref,
} from "firebase/database";
import { db } from "./firebase";

export const filterDefinition = (str) => {
  switch (str) {
    case "A to Z":
      return "name";
    case "Z to A":
      return "name";
    case "Less than 10$":
      return "price_per_hour";
    case "Greater than 10$":
      return "price_per_hour";
    case "Popular":
      return "rating";
    case "Not popular":
      return "rating";
    default:
      return;
  }
};

export function sortByKey(array, key) {
  return [...array].sort((a, b) => {
    const valueA = typeof a[key] === "string" ? a[key].toLowerCase() : a[key];
    const valueB = typeof b[key] === "string" ? b[key].toLowerCase() : b[key];
    if (valueA < valueB) {
      return -1;
    }
    if (valueA > valueB) {
      return 1;
    }
    return 0;
  });
}

export const getAllData = async () => {
  try {
    const dbRef = ref(db, "psychologists");

    const snapshots = await get(dbRef);
    return snapshots.val();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getDataByFilterFirstThree = async (filter) => {
  try {
    const dbRef = ref(db, "psychologists");
    const req = filterDefinition(filter);
    const ordered = query(dbRef, orderByChild(req), limitToFirst(3));
    const snapshots = await get(ordered);
    const psychologists = Object.values(snapshots.val());
    return psychologists;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getDataByFilterAll = async (filter) => {
  try {
    const dbRef = ref(db, "psychologists");
    const req = filterDefinition(filter);
    const snapshots = await get(dbRef);
    const ordered = sortByKey(snapshots.val(), req);
    return ordered;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getDataByFilterFirstThreeReverse = async (filter) => {
  try {
    const dbRef = ref(db, "psychologists");
    const req = filterDefinition(filter);
    const ordered = query(dbRef, orderByChild(req), limitToLast(3));
    const snapshots = await get(ordered);
    const psychologists = Object.values(snapshots.val());
    const resp = [...psychologists].reverse();
    return resp;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getDataByFilterReverse = async (filter) => {
  try {
    const dbRef = ref(db, "psychologists");
    const req = filterDefinition(filter);
    const snapshots = await get(dbRef);
    const ordered = sortByKey(snapshots.val(), req);
    const resp = [...ordered].reverse();
    return resp;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
