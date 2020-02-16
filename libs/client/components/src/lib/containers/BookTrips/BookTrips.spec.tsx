import React from 'react';
import { render } from '@testing-library/react';

import BookTrips from './BookTrips';

describe(' BookTrips', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BookTrips />);
    expect(baseElement).toBeTruthy();
  });
});
