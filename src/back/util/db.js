/**
 * @file Helper to handle generated data as constants.
 */
import { generateUserBase } from './user';

const Database = {
  users: generateUserBase(),
};

/**
 * Clears all of the database 'tables'.
 */
export const clear = () => {
  const keys = Object.keys(Database);
  keys.forEach((key) => {
    Database[key] = [];
  });
};

/**
 * Adds an element to the Database object.
 * @param {String} key The database name in which the element will be added
 * @param {*} elem Element to be added.
 */
export const add = (key, elem) => {
  if (!key || !elem || !Database[key]) {
    return; // nothing to do. Won't add anything.
  }

  Database[key] = [
    ...Database[key],
    elem,
  ];
};

/**
 * Removes an element by ID
 * @param {string} key The database name in which the element will be removed.
 * @param {number} id ID of the element to be removed
 */
export const removeById = (key, id) => {
  if (!key || typeof id === 'undefined' || !Database[key]) {
    return;
  }

  Database[key] = Database[key].filter(elem => elem.id !== id);
};

export default Database;
