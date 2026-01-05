import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react_project3 link', () => {
  render(<App />);
  const linkElement = screen.getByText(/react project3/i);
  expect(linkElement).toBeInTheDocument();
});
