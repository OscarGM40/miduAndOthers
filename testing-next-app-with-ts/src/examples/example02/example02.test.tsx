import { fireEvent, render, screen } from '@testing-library/react';
import { Example2 } from './example02';

import { DataGrid } from '@material-ui/data-grid';

jest.mock('@material-ui/data-grid', () => {
  jest.requireActual('@material-ui/data-grid');
  return {
    DataGrid: jest.fn(() => <div>Table</div>),
  };
});

// const mockedDataGrid = mocked(DataGrid, true); desde jest 28 es jest.mocked
const mockedDataGrid = jest.mocked(DataGrid, true);

describe('Testing data-grid of material', () => {
  beforeEach(() => {
    mockedDataGrid.mockClear();
    // jest.clearAllMocks();
  });
  it('renders the grid with columns and rows', () => {
    // normalmente no se usa done,pero puedo usarlo cuando quiera
    // it('renders the grid with columns and rows', (done) => {
    /*  const myOnMoney = (n: number) => {
      console.log('clicked');
      expect(n).toBe(33);
      done();
    }; */
    const myOnMoney = jest.fn();
    render(<Example2 onMoney={myOnMoney} />);
    fireEvent.click(screen.getByRole('button', { name: 'Give me 33 dollars' }));
    expect(myOnMoney).toHaveBeenCalledTimes(1);
    expect(myOnMoney).toHaveBeenCalledWith(33);
  });

  it('renders table passing the expected properties', () => {
    render(<Example2 onMoney={jest.fn()} />);
    expect(mockedDataGrid).toHaveBeenCalledTimes(1);
    expect(mockedDataGrid).toHaveBeenCalledWith(
      {
        rows: expect.arrayContaining([
          expect.objectContaining({ id: expect.any(Number) }),
        ]),
        columns: expect.arrayContaining([
          expect.objectContaining({ field: expect.any(String) }),
        ]),
        pageSize: 5,
        checkboxSelection: true,
      },
      {}
    );
  });
});
