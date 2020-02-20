/**
 *
 * App Component
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import React, { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled';
import { Switch, Route } from 'react-router-dom';
import { Pane, Heading, Button, Link, SegmentedControl } from 'evergreen-ui';
import { Trans } from '@lingui/react';

/** Custom imports */
import { NotFoundPage, GlobalStyles } from '@bsc/notes/components';

import { NotesList } from '../NotesList/NotesList';
import { CreateNote } from '../CreateNote/CreateNote';

const Header = styled(Pane)`
  position: fixed;
  left: 0;
  right: 0;
`;
const StyledLink = styled(Link)`
  :focus {
    outline: none;
    box-shadow: none;
  }
`;

export const LocaleToggle = () => {
  const [language, setLanguage] = useState('en');
  const options = [
    { label: 'English', value: 'en' },
    { label: 'Czech', value: 'cs' },
  ];
  const defaultLanguage = 'en';

  return (
    <SegmentedControl
      width={240}
      options={options}
      value={language}
      onChange={(val) => setLanguage(''+val)}
    />
  );
};

export const App = () => {
  return (
    <Fragment>
      <Pane
        marginLeft="auto"
        marginRight="auto"
        paddingX="120px"
        width="1024px"
        minHeight="100%"
        display="flex"
        flexDirection="column"
      >
        <Helmet
          titleTemplate="%s - BSC Notes Example"
          defaultTitle="BSC Notes Example"
        >
          <meta name="description" content="BSC Notes Example Application" />
        </Helmet>
        <Header
          display="flex"
          zIndex={1}
          padding={16}
          background="tint2"
          elevation={1}
        >
          <Pane flex={1} alignItems="center" display="flex">
            <StyledLink href="/" textDecoration="none" boxShadow="none">
              <Heading size={600}>
                <Trans>BSC Note Example Application</Trans>
              </Heading>
            </StyledLink>
          </Pane>
          <Pane>
            <Button is={Link} to="/create-note">
              Create New Note
            </Button>
          </Pane>
        </Header>
        <Pane marginTop="56px">
          <Switch>
            <Route exact path="/" component={NotesList} />
            <Route path="/create-note" component={CreateNote} />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </Pane>
        {/* <Footer /> */}
        <GlobalStyles />
      </Pane>
    </Fragment>
  );
};

export default App;
