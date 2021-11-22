import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Components
import ContentComponent from '../Content.component';

// Context
import { useData } from '../../../../providers/DataGlobal/DataGlobal.provider';

jest.mock('../../../../providers/DataGlobal/DataGlobal.provider');

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
    useData.mockReturnValue({
      search: 'Wizeline',
      isDark: true,
    });
    const container = render(
      <BrowserRouter>
        <ContentComponent videos={video} />
      </BrowserRouter>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
