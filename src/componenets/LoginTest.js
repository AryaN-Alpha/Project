import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './login';

// Mock the fetch API globally
global.fetch = jest.fn();

describe('Login Component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('renders Login component correctly', () => {
    render(<Login />);

    // Check if email and password inputs are rendered
    expect(screen.getByPlaceholderText('Enter a valid email address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter password')).toBeInTheDocument();

    // Check if Login button is rendered
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  test('displays email validation error for invalid email', async () => {
    render(<Login />);

    const emailInput = screen.getByPlaceholderText('Enter a valid email address');
    const loginButton = screen.getByRole('button', { name: /login/i });

    // Enter invalid email
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.click(loginButton);

    // Check for error message
    await waitFor(() => {
      expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument();
    });
  });

  test('displays password validation error for short password', async () => {
    render(<Login />);

    const emailInput = screen.getByPlaceholderText('Enter a valid email address');
    const passwordInput = screen.getByPlaceholderText('Enter password');
    const loginButton = screen.getByRole('button', { name: /login/i });

    // Enter valid email but short password
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: '123' } });
    fireEvent.click(loginButton);

    // Check for error message
    await waitFor(() => {
      expect(screen.getByText('Password must be at least 6 characters long.')).toBeInTheDocument();
    });
  });

  test('sends login request for valid inputs', async () => {
    render(<Login />);

    const emailInput = screen.getByPlaceholderText('Enter a valid email address');
    const passwordInput = screen.getByPlaceholderText('Enter password');
    const loginButton = screen.getByRole('button', { name: /login/i });

    // Mock API response
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'Login successful' }),
    });

    // Enter valid email and password
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);

    // Ensure fetch was called with the correct arguments
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Email: 'test@example.com', Password: 'password123' }),
      });
    });

    // Check for success alert
    await waitFor(() => {
      expect(global.alert).toHaveBeenCalledWith('Login successful:', { message: 'Login successful' });
    });
  });

  test('displays error message for failed login', async () => {
    render(<Login />);

    const emailInput = screen.getByPlaceholderText('Enter a valid email address');
    const passwordInput = screen.getByPlaceholderText('Enter password');
    const loginButton = screen.getByRole('button', { name: /login/i });

    // Mock API error response
    fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ message: 'Invalid credentials' }),
    });

    // Enter valid email and password
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);

    // Check for error alert
    await waitFor(() => {
      expect(global.alert).toHaveBeenCalledWith('Invalid credentials');
    });
  });
});
