/**
 * @file User util
 */
import faker from 'faker';

export const generateUser = (baseData) => {
  return {
    id: faker.random.uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    ...baseData,
  };
};

export const generateUserBase = (limit = 100) => {
  const userBase = [];

  for (let i = 1; i <= limit; i += 1) {
    userBase.push(generateUser({ id: i }));
  }

  return userBase;
};
