import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import path from 'ramda/src/path';

/** Custom imports */
import { Loading } from '../../elements/Loading/Loading';
import { LaunchTile } from '../../blocks/LaunchTile/LaunchTile';
import { LoadMoreButton } from '../../elements/LoadMoreButton/LoadMoreButton';

export const LAUNCH_TILE_DATA = gql`
  fragment LaunchTile on Launch {
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
`;

const GET_LAUNCHES = gql`
  query launchList($after: String) {
    pagedLaunches(after: $after) {
      cursor
      hasMore
      launches {
        ...LaunchTile
      }
    }
  }
  ${LAUNCH_TILE_DATA}
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

  /**
   * Updates the results/query if there is more items to fetch.
   * TODO: Handle return object with 'ramda' not by spread operators
   *
   * updateQuery function tell Apollo how to update
   * the list of launches in the cache.
   * To do this, we take the previous query result and
   * combine it with the new query result from fetchMore
   *
   * @param prev previous results
   * @param Object
   */
  const updateQuery = (prev, { fetchMoreResult, ...rest }) => {
    if (!fetchMoreResult) return prev;
    return {
      ...fetchMoreResult,
      pagedLaunches: {
        ...fetchMoreResult.pagedLaunches,
        launches: [
          ...prev.pagedLaunches.launches,
          ...fetchMoreResult.pagedLaunches.launches,
        ],
      },
    };
  };

  const handleLoadMore = () => {
    fetchMore({
      variables: {
        after: data.pagedLaunches.cursor,
      },
      updateQuery,
    });
  };

  const launches: any = path(['pagedLaunches', 'launches'], data);
  const hasMore: any = path(['pagedLaunches', 'hasMore'], data);

  return (
    <Fragment>
      {launches.map((launch) => (
        <LaunchTile key={launch.id} launch={launch} />
      ))}
      {hasMore && (
        <LoadMoreButton
          onClick={handleLoadMore}
          appearance="primary"
          margin="auto"
        >
          Load More
        </LoadMoreButton>
      )}
    </Fragment>
  );
};

export default Launches;
