import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import App from './app/components/app/App';
import { getApolloClient } from './util/apollo';

const client = getApolloClient();

require('./styles/styles.scss');

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
);
