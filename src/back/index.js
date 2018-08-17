/**
 * @file entry point for the server initialization.
 */

require('babel-polyfill');
// eslint-disable-next-line
import server from './server/server';

// Start up server:
server();
