import React from 'react';
import { render } from '@testing-library/react';

import Launch from './Launch';

describe(' Launch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Launch />);
    expect(baseElement).toBeTruthy();
  });
});
