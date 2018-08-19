/**
 * @file Global types.
 */
import {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLScalarType,
  Kind,
  GraphQLNonNull,
} from 'graphql';

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

/**
 * Unsigned int GQL type.
 */
export const UInt = new GraphQLScalarType({
  name: 'UInt',
  serialize: value => value && value >= 0 ? value : null,
  parseValue: value => value && value >= 0 ? value : null,
  parseLiteral: (ast) => {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10) >= 0 || null;
    }
    return null;
  },
});

/**
 * Record ID items.
 */
export const RecordID = new GraphQLNonNull(UInt);

