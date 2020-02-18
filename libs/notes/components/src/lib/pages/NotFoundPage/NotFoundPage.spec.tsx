import React from 'react';
import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

describe(' NotFoundPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NotFoundPage />);
    expect(baseElement).toBeTruthy();
  });
});
