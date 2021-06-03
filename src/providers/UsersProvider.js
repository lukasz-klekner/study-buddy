import { users as usersData } from '../data/users';
import React, { useState } from 'react';

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
});

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(usersData);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleAddUser = (formValues) => {
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };
    setUsers([newUser, ...users]);
  };

  return <UsersContext.Provider value={{ handleAddUser, users, deleteUser }}>{children}</UsersContext.Provider>;
};
