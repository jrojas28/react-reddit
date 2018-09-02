/**
 * @file Database related tests
 */
import { expect } from 'chai';

import { generateUser, generateUserBase } from '../../util/user';
import { clear } from '../../util/db';

describe('(util) user.js Utility', () => {
  describe('(util) generateUser', () => {
    it('contains expected attributes', () => {
      const generatedUser = generateUser();
      expect(generatedUser).to.haveOwnProperty('id');
      expect(generatedUser).to.haveOwnProperty('name');
      expect(generatedUser).to.haveOwnProperty('email');
      expect(generatedUser).to.haveOwnProperty('username');
    });

    it('accepts base data to override whatever is generated', () => {
      const generatedUser = generateUser({
        random: 'custom-data',
        name: 'Luis',
      });

      expect(generatedUser.name).to.equal('Luis');
      expect(generatedUser).to.haveOwnProperty('random');
      expect(generatedUser.random).to.equal('custom-data');
    });
  });

  describe('(util) generateUserBase', () => {
    it('generates a list of users with IDs going from 1 to limit', () => {
      clear();
      const list = generateUserBase(100);

      for (let i = 1; i <= 100; i += 1) {
        expect(list[i - 1].id).to.equal(i);
      }
    });
  });
});
