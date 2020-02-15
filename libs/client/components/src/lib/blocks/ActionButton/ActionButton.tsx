import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Button } from 'evergreen-ui';

/** Custom imports */
import { Loading } from '../../elements/Loading/Loading';

export const TOGGLE_CART = gql`
  mutation addOrRemoveFromCart($launchId: ID!) {
    addOrRemoveFromCart(id: $launchId) @client
  }
`;

export const CANCEL_TRIP = gql`
  mutation cancel($launchId: ID!) {
    cancelTrip(launchId: $launchId) {
      success
      message
      launches {
        id
        isBooked
      }
    }
  }
`;

export interface ActionButtonProps {
  getLaunchDetails?: any;
  isBooked?: any;
  id?: any;
  isInCart?: any;
}

export const ActionButton = ({
  isBooked,
  id,
  isInCart,
  getLaunchDetails,
}: ActionButtonProps) => {
  const [mutate, { loading, error }] = useMutation(
    isBooked ? CANCEL_TRIP : TOGGLE_CART,
    {
      variables: { launchId: id },
      refetchQueries: [
        {
          query: getLaunchDetails,
          variables: { launchId: id },
        },
      ],
    }
  );

  if (loading) {
    return (
      <span>
        <Loading />
      </span>
    );
  }

  if (error) {
    return (
      <p>
        <span>An error occurred</span>
      </p>
    );
  }

  return (
    <div>
      <Button
        onClick={() => mutate()}
        isLoading={loading}
        data-testid={'action-button'}
      >
        {isBooked
          ? 'Cancel This Trip'
          : isInCart
          ? 'Remove from Cart'
          : 'Add to Cart'}
      </Button>
    </div>
  );
};

export default ActionButton;
