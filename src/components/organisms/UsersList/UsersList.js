import { users } from '../../../data/users';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UsersList.style';

const UsersList = () => (
  <Wrapper>
    <ul>
      {users.map((user) => (
        <UsersListItem key={user.name} userData={user} />
      ))}
    </ul>
  </Wrapper>
);

export default UsersList;
