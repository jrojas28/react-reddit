/**
 * @file Front end related routes
 */
import express from 'express';
import { frontEndConfig } from '../util/config';

const router = express.Router();

router.get('*', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My React App</title>
    </head>
    <body>
        <script>
          window.__CONFIG__ = ${JSON.stringify(frontEndConfig())}
        </script>
        <div id="app"></div>
        <script type="text/javascript" src="dist/reddit.bundle.js"></script>
    </body>
    </html>
  `);
});

export default router;
