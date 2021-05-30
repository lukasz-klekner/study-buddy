import { useState, useEffect } from 'react';

import { users as userData } from '../../../data/users';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UsersList.style';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userData) {
        resolve([...userData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  useEffect(() => {
    setIsLoading(true);
    mockAPI()
      .then((data) => {
        setIsLoading(false);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      <h1>{isLoading ? 'Loading...' : 'Users List'}</h1>
      <ul>
        {users.map((user) => (
          <UsersListItem key={user.name} userData={user} deleteUser={deleteUser} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default UsersList;
