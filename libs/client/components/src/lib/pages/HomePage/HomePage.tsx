import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import { PageContainer } from '../../templates/PageContainer/PageContainer';
import { Launch } from '../Launch/Launch';
import { Launches } from '../Launches/Launches';
import { Cart } from '../Cart/Cart';
import { Profile } from '../Profile/Profile';
import { Footer } from '../../sections/Footer/Footer';

export interface HomePageProps {
  children?: any;
}

export const HomePage = (props: HomePageProps) => {
  return (
    <Fragment>
      <PageContainer>
        <Route exact path="/" component={Launches} />
        <Route path="/launch/:launchId" component={Launch} />
        <Route exact path="/cart" component={Cart} />
        <Route path="/profile" component={Profile} />
      </PageContainer>
      <Footer />
    </Fragment>
  );
};

export default HomePage;
