import {render, screen} from '@testing-library/react';
import App from './App';


it('tests if header shows up', () => {
    render (<App/>)
    expect(screen.getByText('Travel shop')).toBeTruthy()
})