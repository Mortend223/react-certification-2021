import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Components
import ContentComponent from '../Content.component';

// Context
import { useAuth } from '../../../../providers/Auth/Auth.provider';
import { useData } from '../../../../providers/DataGlobal/DataGlobal.provider';
import { useUserContext } from '../../../../providers/DataUser/DataUser.provider';

jest.mock('../../../../providers/Auth/Auth.provider');
jest.mock('../../../../providers/DataGlobal/DataGlobal.provider');
jest.mock('../../../../providers/DataUser/DataUser.provider');

describe('Content Component', () => {
  it('Should show ContentComponent', () => {
    const video = [
      {
        id: 'nmXMgqjQzls',
        title: 'Wizeline',
        description: 'Wizeline',
        thumbnailUrl: 'https://nmXMgqjQzls/mqdefault.jpg',
      },
    ];
    useAuth.mockReturnValue({
      authenticated: true,
      logout: jest.fn(),
      user: {},
    });
    useData.mockReturnValue({
      search: 'Wizeline',
      isDark: true,
    });
    useUserContext.mockReturnValue({
      addFavoriteVideo: jest.fn(),
    });
    const container = render(
      <BrowserRouter>
        <ContentComponent videos={video} />
      </BrowserRouter>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
