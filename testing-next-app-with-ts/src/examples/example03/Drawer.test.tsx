import { render, screen } from '@testing-library/react';
import { MyDrawer } from './Drawer';
import user from '@testing-library/user-event';

jest.mock('@material-ui/core', () => ({
  // le paso la factory
  ...jest.requireActual('@material-ui/core'),
  SwipeableDrawer: jest.fn(() => <div>Hellooo</div>),
}));

describe('Drawer', () => {
  it('shows not the original text but the mocked', () => {
    render(<MyDrawer />);
    expect(screen.queryByText('Hellooo')).toBeInTheDocument();
  });

  it('clicking on "Open Drawer" shows the mocked text too', () => {
    render(<MyDrawer />);
    user.click(screen.getByRole('button', { name: 'Open Drawer' }));
    expect(screen.queryByText('Hellooo')).toBeInTheDocument();
  });
});
