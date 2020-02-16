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
  const { data, loading, error, fetchMore, networkStatus } = useQuery(
    GET_LAUNCHES,
    {
      notifyOnNetworkStatusChange: true,
    }
  );

  if (loading && networkStatus !== 3) {
    return <Loading />;
  }

  if (error) {
    return <p>ERROR</p>;
  }

  if (!data) {
    return <p>Not found</p>;
  }

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

  const handleLoadMore = async () => {
    await fetchMore({
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
          isLoading={loading}
        >
          Load More
        </LoadMoreButton>
      )}
    </Fragment>
  );
};

export default Launches;

/**
 * The current status of a query’s execution in Apollo system.
 * I'm included this here just for information.
 * Actual implementation can be found here:
 * https://github.com/apollographql/apollo-client/blob/master/src/core/networkStatus.ts
 */
enum NetworkStatus {
  /**
   * The query has never been run before and the query is now currently running. A query will still
   * have this network status even if a partial data result was returned from the cache, but a
   * query was dispatched anyway.
   */
  loading = 1,

  /**
   * If `setVariables` was called and a query was fired because of that then the network status
   * will be `setVariables` until the result of that query comes back.
   */
  setVariables = 2,

  /**
   * Indicates that `fetchMore` was called on this query and that the query created is currently in
   * flight.
   */
  fetchMore = 3,

  /**
   * Similar to the `setVariables` network status. It means that `refetch` was called on a query
   * and the refetch request is currently in flight.
   */
  refetch = 4,

  /**
   * Indicates that a polling query is currently in flight. So for example if you are polling a
   * query every 10 seconds then the network status will switch to `poll` every 10 seconds whenever
   * a poll request has been sent but not resolved.
   */
  poll = 6,

  /**
   * No request is in flight for this query, and no errors happened. Everything is OK.
   */
  ready = 7,

  /**
   * No request is in flight for this query, but one or more errors were detected.
   */
  error = 8,
}
