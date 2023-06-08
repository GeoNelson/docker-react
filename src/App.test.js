import { render, screen } from '@testing-library/react';
import App from './App';

test('chuj i pizda', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link2', () => {
  render(<App />);
  const linkElement = screen.getByText(/fajne/i);
  expect(linkElement).toBeInTheDocument();
});