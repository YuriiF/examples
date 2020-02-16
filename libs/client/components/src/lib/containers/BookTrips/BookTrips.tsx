import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import styled from '@emotion/styled';
import gql from 'graphql-tag';
import { Button } from 'evergreen-ui';
import path from 'ramda/src/path';
import { GET_LAUNCH } from '../CartItem/CartItem';

export const BOOK_TRIPS = gql`
  mutation BookTrips($launchIds: [ID]!) {
    bookTrips(launchIds: $launchIds) {
      success
      message
      launches {
        id
        isBooked
      }
    }
  }
`;

export interface BookTripsProps {
  cartItems: any;
}

export const BookTrips = ({ cartItems }: BookTripsProps) => {
  const [bookTrips, { data }] = useMutation(BOOK_TRIPS, {
    variables: { launchIds: cartItems },
    refetchQueries: cartItems.map((launchId) => ({
      query: GET_LAUNCH,
      variables: { launchId },
    })),
    update(cache) {
      cache.writeData({ data: { cartItems: [] } });
    },
  });

  const success = path(['bookTrips', 'success'], data);

  return !success ? (
    <p data-testid="message">{path(['bookTrips', 'message'], data)}</p>
  ) : (
    <Button onClick={() => bookTrips()} data-testid="book-button">
      Book All
    </Button>
  );
};

export default BookTrips;
