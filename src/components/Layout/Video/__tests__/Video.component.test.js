import React from 'react';
import { render, screen } from '@testing-library/react'

// Components
import VideoComponent from '../Video.component';

describe('Video Component', () => {
    it('Should show Video Component', () => {
      const container = render(<VideoComponent description='some text' title='title of video' url='/logo512.png' />)

      expect(container.firstChild).toMatchSnapshot()
    });
    it('Should render the title', () => {
        const title='title of video'
        render(<VideoComponent title='title of video' />)

        expect(screen.getByText(title)).toBeInTheDocument()
    });
    it('Should render the thumbnail', () => {
        render(<VideoComponent url='/logo512.png' />)
        const thumbnail = screen.getByRole('img');

        expect(thumbnail).toHaveAttribute('src','/logo512.png');
    });
    it('Should render the description', () => {
        const description='some text'
        render(<VideoComponent description='some text' />)

        expect(screen.getByText(description)).toBeInTheDocument()
    });
});