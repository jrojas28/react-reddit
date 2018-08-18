/**
 * @file GQL helper methods
 */
import { SliceArgsType } from '../gql/models/global/types';

export const getSliceArgs = () => {
  return {
    slice: {
      description: 'Slice arguments for lists',
      type: SliceArgsType,
    },
  };
};

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
