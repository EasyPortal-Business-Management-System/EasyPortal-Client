import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('app layout', () => {

  test('renders app main page', () => {
    render(<App />);
    const mainPage = screen.getByText(/EasyPortal/);
    expect(mainPage).toBeInTheDocument();
  });

  test('renders app loading page', () => {
    render(<App />);
    const loadingPage = screen.getByText(/EasyPortal/);
    expect(loadingPage).toBeInTheDocument();
  });

  test('renders login bar for auth services', () => {
    render(<App />);
    const loginBar = screen.getByText(/LogIn/);
    expect(loginBar).toBeInTheDocument();
  });

  test('renders register page when register link is clicked', () => {
    render(<App />);
    const registerLink = screen.getByText(/Register/);
    userEvent.click(registerLink);

    const pageHeading = screen.getByText(/Register/);
    expect(pageHeading).toBeInTheDocument();
  });
});