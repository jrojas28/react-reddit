/**
 * @file Database related tests
 */
import { expect } from 'chai';

import { getSlicedList } from '../../util/gql';

describe('(util) gql.js Utility', () => {
  describe('(util) getSlicedList', () => {
    it('uses limit to define the max amount of items to return', () => {
      const list = [1, 2, 3];
      expect(getSlicedList(list, { limit: 2 })).to.eql([1, 2]);
    });

    it('uses offset to determine where to start the list from', () => {
      const list = [1, 2, 3];
      expect(getSlicedList(list, { offset: 2 })).to.eql([3]);
    });

    it('combines limit & offset to return a sliced list', () => {
      const list = [1, 2, 3, 4];
      expect(getSlicedList(list, { offset: 2, limit: 1 })).to.eql([3]);
    });
  });
});
