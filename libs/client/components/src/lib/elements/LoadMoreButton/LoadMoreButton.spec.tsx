import React from 'react';
import { render } from '@testing-library/react';

import LoadMoreButton from './LoadMoreButton';

describe(' LoadMoreButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoadMoreButton />);
    expect(baseElement).toBeTruthy();
  });
});
