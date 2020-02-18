/**
 * Asynchronously loads the component for HomePage
 */
import * as React from 'react';
import { Spinner } from 'evergreen-ui';

/** Custom imports */
import loadable from '../../utils/loadable';

export default loadable(() => import('./HomePage'), {
  fallback: <Spinner />,
});
