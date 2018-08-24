/**
 * @file entry point for the server initialization.
 */

import 'babel-polyfill';
import dotenv from 'dotenv';
import server from './server/server';

// Add .env config
dotenv.config();
// Start up server:
server();
