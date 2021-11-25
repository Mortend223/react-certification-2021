import React from 'react';
import { render, screen } from '@testing-library/react';

// Components
import HeaderComponent from '../Header.component';

// Context
import { useAuth } from '../../../../providers/Auth/Auth.provider';
import { useData } from '../../../../providers/DataGlobal/DataGlobal.provider';

jest.mock('../../../../providers/Auth/Auth.provider');
jest.mock('../../../../providers/DataGlobal/DataGlobal.provider');

// Mocks
const onSearchMock = jest.fn();
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    location: jest.fn(),
    push: jest.fn(),
  }),
  useLocation: () => ({
    location: jest.fn(),
  }),
}));

describe('Header Component', () => {
  it('Should show HeaderComponent', () => {
    useAuth.mockReturnValue({
      authenticated: true,
      logout: jest.fn(),
      user: {},
    });
    useData.mockReturnValue({
      search: 'Wizeline',
      isDark: true,
    });
    const container = render(<HeaderComponent onChange={onSearchMock} />);

    expect(container.firstChild).toMatchSnapshot();
  });
  it('Should render the input', () => {
    useAuth.mockReturnValue({
      authenticated: true,
      logout: jest.fn(),
      user: {},
    });
    useData.mockReturnValue({
      search: 'Wizeline',
      isDark: true,
    });
    render(<HeaderComponent onChange={onSearchMock} />);

    expect(screen.getByPlaceholderText('Wizeline')).toBeInTheDocument();
  });
  it('Should render the Toggle Button', () => {
    useAuth.mockReturnValue({
      authenticated: true,
      logout: jest.fn(),
      user: {},
    });
    useData.mockReturnValue({
      search: 'Wizeline',
      isDark: true,
    });
    render(<HeaderComponent onChange={onSearchMock} />);

    expect(screen.getByTitle('toggle-button')).toBeInTheDocument();
  });
  it('Should render the logo', () => {
    useAuth.mockReturnValue({
      authenticated: true,
      logout: jest.fn(),
      user: { avatarUrl: 'session_out.png' },
    });
    useData.mockReturnValue({
      search: 'Wizeline',
      isDark: true,
    });
    render(<HeaderComponent onChange={onSearchMock} />);
    const logo = screen.getByAltText('Wizeline');

    expect(logo).toHaveAttribute('src', 'session_out.png');
  });
  it('Should render the Menu Toggle', () => {
    useAuth.mockReturnValue({
      authenticated: true,
      logout: jest.fn(),
      user: {},
    });
    useData.mockReturnValue({
      search: 'Wizeline',
      isDark: true,
    });
    render(<HeaderComponent onChange={onSearchMock} />);

    expect(screen.getByTitle('menu-home')).toBeInTheDocument();
  });
});
