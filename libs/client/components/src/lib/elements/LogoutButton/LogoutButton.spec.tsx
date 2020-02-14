import React from 'react';
import { render } from '@testing-library/react';

import LogoutButton from './LogoutButton';

describe(' LogoutButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LogoutButton />);
    expect(baseElement).toBeTruthy();
  });
});
