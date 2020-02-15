import React from 'react';
import { render } from '@testing-library/react';

import ActionButton from './ActionButton';

describe(' ActionButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ActionButton />);
    expect(baseElement).toBeTruthy();
  });
});
