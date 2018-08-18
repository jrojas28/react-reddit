/**
 * @file GQL helper methods
 */
import { SliceArgsType } from '../gql/models/global/types';

/**
 * Returns the sliced arguments to be used
 * on GQL type definitions.
 */
export const getSliceArgs = () => {
  return {
    slice: {
      description: 'Slice arguments for lists',
      type: SliceArgsType,
    },
  };
};

/**
 * Given a list, slices it and returns it based on
 * sliceArgs.
 * @param {Array} list List to be sliced
 * @param {Object} slice Parameters for slicing, expecting limit & offset.
 */
export const getSlicedList = (list, slice = {}) => {
  const {
    offset,
    limit = 25,
  } = slice;

  let resolvedList = [...list];

  if (offset) {
    resolvedList = resolvedList.slice(offset);
  }

  if (limit) {
    resolvedList = resolvedList.slice(0, limit);
  }

  return resolvedList;
};
