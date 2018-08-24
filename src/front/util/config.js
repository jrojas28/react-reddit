/**
 * @file Front-end configuration file related methods
 */

export const getConfig = () => {
  if (!window) {
    return {};
  }

  // eslint-disable-next-line
  return window.__CONFIG__;
};
