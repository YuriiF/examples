import React from 'react';
import { render } from '@testing-library/react';

import LaunchTile from './LaunchTile';

describe(' LaunchTile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LaunchTile />);
    expect(baseElement).toBeTruthy();
  });
});
