/**
 * @file Helper to handle generated data as constants.
 */
import { generateUserBase } from './user';

const Database = {
  users: generateUserBase(),
};

export const addUser = (user) => {
  Database.users = [
    ...Database.users,
    user,
  ];
};

export const removeUser = (userId) => {
  Database.users = Database.users.filter(user => user.id !== userId);
};

export default Database;
