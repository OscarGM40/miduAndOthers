import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import user from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import Counter from './Counter';

describe('Tests on Counter with defaultCount === 0', () => {
  beforeEach(() => {
    act(() => {
      render(<Counter defaultCount={0} description={'My Counter'} />);
    });
  });

  it('defaultCount=0,then counter = 1', () => {
    act(() => {
      expect(screen.getByText('Current Count: 0')).toBeInTheDocument();
      screen.getByText(/My Counter/i);
    });
  });

  it('defaultCount=0,and + clicked then counter = 1', async () => {
    act(() => {
      fireEvent.click(screen.getByRole('button', { name: 'Add to Counter' }));
    });
    expect(await screen.findByText('Current Count: 1')).toBeInTheDocument();
  });

  it('defaultCount=0,and - clicked then counter = -1', () => {
    act(() => {
      fireEvent.click(screen.getByRole('button', { name: 'Decrement' }));
    });
    expect(screen.getByText('Current Count: -1')).toBeInTheDocument();
  });
});

describe('when the incrementor changes to 5 and "+" is clicked', () => {
  beforeEach(() => {
    render(<Counter defaultCount={20} description={'My Counter'} />);
  });
  it('renders "Current Count: 4" when adding 4', () => {
    // user.type(screen.getByLabelText(/Incrementor:/i), '{selectall}5');
    fireEvent.change(screen.getByTestId('my-input'), {
      target: { value: 4 },
    });
    user.click(screen.getByRole('button', { name: /Add to Counter/i }));
    expect(screen.getByText('Current Count: 24')).toBeInTheDocument();
  });

  it('renders too big and then it will disappear after xxxMS', async () => {
    await waitForElementToBeRemoved(() =>
      screen.getByText('I am too small to be a real div')
    );
  });
});
