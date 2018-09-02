/**
 * @file User util
 */
import faker from 'faker';
import { getIdForTable } from './db';

/**
 * Generates a user with its attributes using faker.
 * BaseData can be provided for custom functionality.
 * @param {Object} baseData information to replace the generated one
 */
export const generateUser = (baseData) => {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    username: faker.internet.userName(),
    ...baseData,
    // Make sure ID is not overwritten
    id: getIdForTable('users'),
  };
};

/**
 * Returns a list of users with IDs from 1 to limit
 * @param {int} limit Number of users to generate (defaults to 100)
 */
export const generateUserBase = (limit = 100) => {
  const userBase = [];

  for (let i = 1; i <= limit; i += 1) {
    userBase.push(generateUser());
  }

  return userBase;
};
