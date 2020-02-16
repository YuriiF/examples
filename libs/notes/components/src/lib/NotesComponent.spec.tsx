import React from 'react';
import { render } from '@testing-library/react';

import NotesComponent from './NotesComponent';

describe(' NotesComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NotesComponent />);
    expect(baseElement).toBeTruthy();
  });
});
