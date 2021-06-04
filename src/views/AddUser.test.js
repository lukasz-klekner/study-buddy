import { screen, fireEvent } from '@testing-library/react';

import Dashboard from './Dashboard';
import AddUser from './AddUser';
import { renderWithProviders } from '../helpers/renderWithThemeProvider';

describe('Form Field', () => {
  it('Renders the component', () => {
    renderWithProviders(
      <>
        <Dashboard />
        <AddUser />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Lukasz' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '100%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.7' } });
    fireEvent.click(screen.getByText('Add'));
  });
});
