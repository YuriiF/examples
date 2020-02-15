import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { LAUNCH_TILE_DATA } from '../Launches/Launches';
import { Loading } from '../../elements/Loading/Loading';
import { Header } from '../../sections/Header/Header';
import { LaunchTile } from '../../blocks/LaunchTile/LaunchTile';

export const GET_MY_TRIPS = gql`
  query GetMyTrips {
    me {
      id
      email
      trips {
        ...LaunchTile
      }
    }
  }
  ${LAUNCH_TILE_DATA}
`;

export interface ProfileProps {}

export const Profile = () => {

  /**
   * Since we want this list to always
   * reflect the newest data from our graph API,
   * we set the fetchPolicy for this query to network-only.
   */
  const { data, loading, error } = useQuery(GET_MY_TRIPS, {
    fetchPolicy: 'network-only',
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>ERROR: {error.message}</p>;
  }

  if (data === undefined) {
    return <p>ERROR</p>;
  }

  return (
    <Fragment>
      <Header>My Trips</Header>
      {data.me && data.me.trips.length ? (
        data.me.trips.map((launch) => (
          <LaunchTile key={launch.id} launch={launch} />
        ))
      ) : (
        <p>You haven't booked any trips</p>
      )}
    </Fragment>
  );
};

export default Profile;
