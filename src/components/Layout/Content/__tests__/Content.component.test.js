import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import ContentComponent from '../Content.component';

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
    const container = render(
      <BrowserRouter>
        <ContentComponent videos={video} />
      </BrowserRouter>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
