import React from 'react';
import { render, screen } from '@testing-library/react';

// Components
import HeaderComponent from '../Header.component';

// Context
import { useData } from '../../../../context/data-context';

jest.mock('../../../../context/data-context');

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
    useData.mockReturnValue({
      search: 'Wizeline',
      isDark: true,
    });
    const container = render(<HeaderComponent onChange={onSearchMock} />);

    expect(container.firstChild).toMatchSnapshot();
  });
  it('Should render the input', () => {
    useData.mockReturnValue({
      search: 'Wizeline',
      isDark: true,
    });
    render(<HeaderComponent onChange={onSearchMock} />);

    expect(screen.getByPlaceholderText('Wizeline')).toBeInTheDocument();
  });
  it('Should render the Toggle Button', () => {
    useData.mockReturnValue({
      search: 'Wizeline',
      isDark: true,
    });
    render(<HeaderComponent onChange={onSearchMock} />);

    expect(screen.getByTitle('toggle-button')).toBeInTheDocument();
  });
  it('Should render the logo', () => {
    useData.mockReturnValue({
      search: 'Wizeline',
      isDark: true,
    });
    render(<HeaderComponent onChange={onSearchMock} />);
    const logo = screen.getByAltText('Logo');

    expect(logo).toHaveAttribute('src', 'session_out.png');
  });
  it('Should render the Menu Toggle', () => {
    useData.mockReturnValue({
      search: 'Wizeline',
      isDark: true,
    });
    render(<HeaderComponent onChange={onSearchMock} />);

    expect(screen.getByTitle('menu-toggle')).toBeInTheDocument();
  });
});
