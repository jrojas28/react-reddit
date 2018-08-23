/**
 * @file Helper to handle generated in-memory database.
 */
/**
 * The database object. Each key here represents
 * a table
 */
const Database = {
  users: [],
};

/**
 * Stores the last given ID to the user
 */
const IDRecords = {
  users: 0,
};

/**
 * Clears all of the database 'tables'.
 */
export const clear = () => {
  const keys = Object.keys(Database);
  keys.forEach((key) => {
    Database[key] = [];
    IDRecords[key] = 0;
  });
};

/**
 * Adds an element to the Database object.
 * @param {String} table The database table name in which the element will be added
 * @param {*} elem Element to be added.
 */
export const add = (table, elem) => {
  if (!table || !elem || !Database[table]) {
    return; // nothing to do. Won't add anything.
  }

  Database[table] = [
    ...Database[table],
    elem,
  ];
};

/**
 * Removes an element by ID
 * @param {string} table The database name in which the element will be removed.
 * @param {number} id ID of the element to be removed
 */
export const removeById = (table, id) => {
  if (!table || typeof id === 'undefined' || !Database[table]) {
    return;
  }

  Database[table] = Database[table].filter(elem => elem.id !== id);
};

/**
 * Gets a new, unique, ID for a given table.
 * @param {String} table The database name to which the ID is looked for.
 */
export const getIdForTable = (table) => {
  IDRecords[table] += 1;
  return IDRecords[table];
};

export default Database;
