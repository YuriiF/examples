import React from 'react';
import { render } from '@testing-library/react';

import GenericTemplate from './GenericTemplate';

describe(' GenericTemplate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GenericTemplate />);
    expect(baseElement).toBeTruthy();
  });
});
