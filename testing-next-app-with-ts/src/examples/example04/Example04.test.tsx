import { render, screen } from '@testing-library/react';
import { MyDrawer } from '../example03/Drawer';
import { Example4 } from './Example04';

/* también puedo usar la factory y pasarle el HTML alli,ambas formas son interchangeable */
jest.mock('../example03/Drawer');
jest.mocked(MyDrawer, true).mockImplementation(() => <div>mocked Drawer</div>);

describe('Example04', () => {
  it('renders MyDrawer', () => {
    render(<Example4 />);
    expect(screen.getByText('mocked Drawer')).toBeInTheDocument();
  });
});
