import {render} from '@testing-library/react';
import App from './App';


it('tests if header shows up', () => {
    const page =render (<App/>)
    expect(page.getByText('Travel shop')).toBeTruthy()
})