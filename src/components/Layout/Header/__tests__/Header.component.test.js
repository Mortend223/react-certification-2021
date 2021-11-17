import React from 'react';
import { render, screen } from '@testing-library/react';

import HeaderComponent from '../Header.component';

const onSearchMock = jest.fn();

describe('Header Component', () => {
  it('Should show HeaderComponent', () => {
    const container = render(<HeaderComponent onChangeInput={onSearchMock} />);

    expect(container.firstChild).toMatchSnapshot();
  });
  it('Should render the input', () => {
    render(<HeaderComponent onChangeInput={onSearchMock} />);

    expect(screen.getByPlaceholderText('Wizeline')).toBeInTheDocument();
  });
  it('Should render the Toggle Button', () => {
    render(<HeaderComponent onChangeInput={onSearchMock} />);

    expect(screen.getByTitle('toggle-button')).toBeInTheDocument();
  });
  it('Should render the logo', () => {
    render(<HeaderComponent onChangeInput={onSearchMock} />);
    const logo = screen.getByAltText('Logo');

    expect(logo).toHaveAttribute('src', 'session_out.png');
  });
  it('Should render the Menu Toggle', () => {
    render(<HeaderComponent onChangeInput={onSearchMock} />);

    expect(screen.getByTitle('menu-toggle')).toBeInTheDocument();
  });
});
