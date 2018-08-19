/**
 * @file User util
 */
import faker from 'faker';

/**
 * Generates a user with its attributes using faker.
 * BaseData can be provided for custom functionality.
 * @param {Object} baseData information to replace the generated one
 */
export const generateUser = (baseData) => {
  return {
    id: faker.random.uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    username: faker.internet.userName(),
    ...baseData,
  };
};

/**
 * Returns a list of users with IDs from 1 to limit
 * @param {int} limit Number of users to generate (defaults to 100)
 */
export const generateUserBase = (limit = 100) => {
  const userBase = [];

  for (let i = 1; i <= limit; i += 1) {
    userBase.push(generateUser({ id: i }));
  }

  return userBase;
};
