import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import path from 'ramda/src/path';

/** Custom imports */
import { Loading } from '../../elements/Loading/Loading';
import { Header } from '../../sections/Header/Header';
import { LaunchDetail } from '../../blocks/LaunchDetail/LaunchDetail';
import { ActionButton } from '../../blocks/ActionButton/ActionButton';
import { LAUNCH_TILE_DATA } from '../Launches/Launches';

export const GET_LAUNCH_DETAILS = gql`
  query LaunchDetails($launchId: ID!) {
    launch(id: $launchId) {
      site
      rocket {
        type
      }
      ...LaunchTile
    }
  }
  ${LAUNCH_TILE_DATA}
`;

export interface LaunchProps {
  launchId: any;
}

export const Launch = (props: LaunchProps) => {
  const launchId = path(['match', 'params', 'launchId'], props);

  const { data, loading, error } = useQuery(GET_LAUNCH_DETAILS, {
    variables: { launchId },
  });

  if (loading) return <Loading />;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;
  const launch = path(['launch'], data);
  return (
    <Fragment>
      <Header image={path(['launch', 'mission', 'missionPatch'], data)}>
        {path(['launch', 'mission', 'name'], data)}
      </Header>
      <LaunchDetail {...launch} />
      <ActionButton {...launch} getLaunchDetails={GET_LAUNCH_DETAILS} />
    </Fragment>
  );
};

export default Launch;
