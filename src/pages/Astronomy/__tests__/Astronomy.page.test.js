import React from 'react';
import { render } from '@testing-library/react';

// Components
import AstronomyPage from '../Astronomy.page';

// Hooks
import useAPOD from '../../../hooks/useAPOD';
import { useDataAstronomy } from '../../../providers/DataAstronomy/DataAstronomy.provider';

jest.mock('../../../hooks/useAPOD');
jest.mock('../../../providers/DataAstronomy/DataAstronomy.provider');

describe('Astronomy Page', () => {
  it('Should show Astronomy Page', () => {
    useDataAstronomy.mockReturnValue({
      searchDate: new Date(),
    });
    useAPOD.mockReturnValue({
      response: {
        explanation: "We've seen this same supernova three times",
        title: 'SN Requiem: A Supernova Seen Three Times So Far',
        url: 'https://apod.nasa.gov/apod/image/2111/MACSJ0138_Hubble_1080.jpg',
      },
      error: {
        code: 400,
        msg: 'Some text',
      },
      loading: false,
    });
    const container = render(<AstronomyPage />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
