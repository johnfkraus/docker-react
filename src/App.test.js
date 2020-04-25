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

test('renders windows drools in document', () => {
  const { getByText } = render(<App />);
  const pElement = getByText(/Windows drools/i);
  expect(pElement).toBeInTheDocument();
});

test('renders word change', () => {
  const { getByText } = render(<App />);
  const pElement = getByText(/change/i);
  expect(pElement).toBeInTheDocument();
});
