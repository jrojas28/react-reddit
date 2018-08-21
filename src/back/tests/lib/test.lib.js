/**
 * @file Main test setup file. To be required by any test that requires the app to be started.
 */
import server from '../../server/server';

/**
 * Whether the app has been started or not.
 */
let booted = false;

/**
 * Starts the server.
 */
const boot = () => {
  beforeEach(async () => {
    if (booted) {
      return;
    }

    booted = true;
    await server();
  });
};

const init = () => {
  boot();
};

export default init;
