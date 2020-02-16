import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { LAUNCH_TILE_DATA } from '../../pages/Launches/Launches';
import { LaunchTile } from '../../blocks/LaunchTile/LaunchTile';
import Loading from '../../elements/Loading/Loading';

export const GET_LAUNCH = gql`
  query GetLaunch($launchId: ID!) {
    launch(id: $launchId) {
      ...LaunchTile
    }
  }
  ${LAUNCH_TILE_DATA}
`;

export const CartItem = ({ launchId }) => {
  const { data, loading, error } = useQuery(GET_LAUNCH, {
    variables: { launchId },
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>ERROR: {error.message}</p>;
  }

  if (!data) {
    return <p>Not found</p>;
  }

  const { launch } = data;
  return launch && <LaunchTile launch={launch} />;
};

export default CartItem;
