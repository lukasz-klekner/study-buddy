import { screen, fireEvent } from '@testing-library/react';

import Dashboard from './Dashboard';
import AddUser from './AddUser';
import { renderWithProviders } from '../helpers/renderWithThemeProvider';

describe('Form Field', () => {
  it('Adds new user to the list', () => {
    renderWithProviders(
      <>
        <Dashboard />
        <AddUser />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Lukasz' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '100%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.7' } });
    fireEvent.click(screen.getByTestId('Consent'));
    fireEvent.click(screen.getByText('Add'));
  });

  it('Prevents adding new user if the consent is not checked', () => {
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
    const newUser = screen.queryByText('Lukasz');
    expect(newUser).not.toBeInTheDocument();
  });
});
