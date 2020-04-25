import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
/* I changed the code in App.js, so now this test fails
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

test('renders basic rules link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/basic rules/i);
  expect(linkElement).toBeInTheDocument();
});
