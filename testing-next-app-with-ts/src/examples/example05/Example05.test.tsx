import { render, screen } from '@testing-library/react';
import { Example5 } from './Example05';

jest.mock('../../VeryComplex/DeepFolder/DeeperFolder/VeryComplex');

describe('Example 05', () => {
  it('renders the component in __mocks__', () => {
    render(<Example5 />);
    expect(screen.getByText('Simple Version')).toBeInTheDocument();
    expect(
      screen.queryByText('Very Complex Component')
    ).not.toBeInTheDocument();
  });
});
