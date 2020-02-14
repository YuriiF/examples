import React from 'react';
import { render } from '@testing-library/react';

import Cart from './Cart';

describe(' Cart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cart />);
    expect(baseElement).toBeTruthy();
  });
});
