/**
 * @file server initialization file.
 */
import config from 'config';
import express from 'express';
import bodyParser from 'body-parser';

import getLogger from '../util/log';

const app = express();
const log = getLogger('server');

app.use(bodyParser.json());

app.get('/health-check', (req, res) => res.json({ healthy: true }));

export default () => {
  const port = config.get('server.port');

  app.listen(port, () => {
    log.info(`Server initialized on port: ${port}`);
  });
};
