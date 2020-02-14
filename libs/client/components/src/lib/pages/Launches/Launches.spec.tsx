import React from 'react';
import { render } from '@testing-library/react';

import Launches from './Launches';

describe(' Launches', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Launches />);
    expect(baseElement).toBeTruthy();
  });
});
