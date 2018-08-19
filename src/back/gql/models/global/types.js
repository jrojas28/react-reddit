/**
 * @file Global types.
 */
import { GraphQLInputObjectType, GraphQLInt } from 'graphql';

/**
 * Slice arguments type. Serves the purpose of pagination
 * across any array/collection type.
 */
export const SliceArgsType = new GraphQLInputObjectType({
  name: 'SliceArgs',
  description: 'Slice arguments',
  fields: {
    limit: {
      type: GraphQLInt,
      defaultValue: 25,
    },
    offset: {
      type: GraphQLInt,
      defaultValue: 0,
    },
  },
});
