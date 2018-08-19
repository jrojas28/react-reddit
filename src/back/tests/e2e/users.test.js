/**
 * @file Test file for user related end-points.
 */
import { expect } from 'chai';

import testLib from '../lib/test.lib';
import gqlClient from '../lib/gqlClient.lib';
import { queryAllUsers, querySingleUser } from '../queries/users';

// init:
testLib();

describe('User end-points', () => {
  describe('Query All Users', () => {
    it('returns a list of users with each of their attributes', async () => {
      const { data: { data: { users } } } = await gqlClient.query(queryAllUsers);
      expect(users.length).to.equal(25);
      users.forEach((user) => {
        expect(user).to.haveOwnPropertyDescriptor('id');
        expect(user).to.haveOwnPropertyDescriptor('name');
        expect(user).to.haveOwnPropertyDescriptor('username');
        expect(user).to.haveOwnPropertyDescriptor('email');
      });
    });

    it('returns a sliced list when asked for it', async () => {
      const { data: { data: { users } } } = await gqlClient.query(queryAllUsers, {
        variables: {
          slice: { limit: 2, offset: 4 },
        },
      });

      expect(users.length).to.equal(2);
      expect(users[0].id).to.equal(5);
      expect(users[1].id).to.equal(6);
    });
  });

  describe('Query single User', () => {
    it('queries a single user when ID is provided', async () => {
      const { data: { data: { user } } } = await gqlClient.query(querySingleUser, {
        variables: {
          id: 1,
        },
      });

      expect(user.id).to.equal(1);
    });
  });
});
