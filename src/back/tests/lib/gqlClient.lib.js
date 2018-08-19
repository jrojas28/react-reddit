/**
 * @file GQL client helper for tests.
 */
import axios from 'axios';

/**
 * Hard-coded GQL endpoint.
 */
const GQL_URL = 'http://localhost:3007/graphql';

/**
 * Performs a GQL query or mutation against our endpoint.
 * @param {String} gqlQuery The query to be performed against a GQL endpoint
 * @param {Object} opts List extra parameters, such as variables
 */
const query = async (gqlQuery, opts = {}) => {
  const {
    variables,
    operationName,
  } = opts;

  const data = {
    query: gqlQuery,
    variables,
    operationName,
  };

  try {
    const res = await axios.post(GQL_URL, data);
    return res;
  } catch (error) {
    if (error.response.data) {
      const err = new Error('GQL Errors found');
      err.errors = error.response.data;
      throw err;
    }

    throw error;
  }
};

export default {
  query,
};
