/**
 * @file Boot file for the DB.
 */
import { generateUserBase } from './user';
import Database from './db';

/**
 * Initializes some data in the Database
 */
const bootDB = () => {
  Database.users = generateUserBase();
};

export default () => {
  bootDB();
};
