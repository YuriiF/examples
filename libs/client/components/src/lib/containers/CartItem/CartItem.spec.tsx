import React from 'react';
import { render } from '@testing-library/react';

import CartItem from './CartItem';

describe(' CartItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CartItem />);
    expect(baseElement).toBeTruthy();
  });
});
