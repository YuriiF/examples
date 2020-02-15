import React from 'react';
import { render } from '@testing-library/react';

import LaunchDetail from './LaunchDetail';

describe(' LaunchDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LaunchDetail />);
    expect(baseElement).toBeTruthy();
  });
});
