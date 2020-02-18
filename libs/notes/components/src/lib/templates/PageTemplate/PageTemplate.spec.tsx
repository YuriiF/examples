import React from 'react';
import { render } from '@testing-library/react';

import PageTemplate from './PageTemplate';

describe(' PageTemplate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageTemplate />);
    expect(baseElement).toBeTruthy();
  });
});
