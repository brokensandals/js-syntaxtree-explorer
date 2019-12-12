import React from 'react';
import { render } from '@testing-library/react';
import AppView from './app-view';

test('renders without error', () => {
  const { getByText } = render(<AppView />);
});
