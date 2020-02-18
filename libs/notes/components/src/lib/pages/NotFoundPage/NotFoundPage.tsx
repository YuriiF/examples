/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */
import React from 'react';
// import { FormattedMessage } from 'react-intl';
import { Heading } from 'evergreen-ui';

/** Custom Imports */
// import messages from './messages';

/* eslint-disable-next-line */
export interface NotFoundPageProps {}

export const NotFoundPage = (props: NotFoundPageProps) => {
  return (
    <article>
      <Heading is="h1" size={800}>
        {/* <FormattedMessage {...messages.header} /> */}
        Page Not Found
      </Heading>
    </article>
  );
};

export default NotFoundPage;
