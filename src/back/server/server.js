/**
 * @file server initialization file.
 */
import config from 'config';
import express from 'express';
import bodyParser from 'body-parser';

import getLogger from '../util/log';
import GqlServer from '../gql/index';
import frontEndRouter from '../routes/front-end';
import boot from '../util/boot';

const app = express();
const log = getLogger('server');

app.use(bodyParser.json());
app.use(express.static('./'));

GqlServer.applyMiddleware({ app });

/**
 * Routers:
 */
app.use(frontEndRouter);

/**
 * health end-points
 */
app.get('/health-check', (req, res) => res.json({ healthy: true }));

export default async () => {
  boot();
  const port = config.get('server.port');

  app.listen(port, () => {
    log.info(`Server initialized on port: ${port}`);
    log.info(`GQL running at: ${GqlServer.graphqlPath}`);
  });
};
