import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Spinner } from 'evergreen-ui';
import path from 'ramda/src/path';
import { Route, Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { size } from 'polished';
import { Button } from 'evergreen-ui';

import { colors } from '../../themes/GlobalStyles/Global';
import { LaunchTile } from '../../blocks/LaunchTile/LaunchTile';
import { LoadMoreButton } from '../../elements/LoadMoreButton/LoadMoreButton';

/** TODO: add Loading indicator into separate component */
const Loading = styled(Spinner)(size(48), {
  display: 'block',
  margin: 'auto',
  fill: colors.grey,
});

const GET_LAUNCHES = gql`
  query launchList($after: String) {
    pagedLaunches(after: $after) {
      cursor
      hasMore
      launches {
        id
        isBooked
        rocket {
          id
          name
        }
        mission {
          name
          missionPatch
        }
      }
    }
  }
`;

export interface LaunchesProps {}

export const Launches = (props: LaunchesProps) => {
  const { data, loading, error, fetchMore } = useQuery(GET_LAUNCHES);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>ERROR</p>;
  }

  if (!data) {
    return <p>Not found</p>;
  }

  console.log(data);
  const launches: any = path(['pagedLaunches', 'launches'], data);

  return (
    <Fragment>
      {launches.map((launch) => (
        <LaunchTile key={launch.id} launch={launch} />
      ))}
      <LoadMoreButton appearance="primary" margin="auto">
        Hi Evergreen!
      </LoadMoreButton>
    </Fragment>
  );
};

export default Launches;
