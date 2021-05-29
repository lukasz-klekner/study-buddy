import { users } from '../../data/users';
import UsersListItem from '../UsersListItem/UsersListItem';

const UsersList = () => (
  <div>
    <ul>
      {users.map((user) => (
        <UsersListItem key={user.name} userData={user} />
      ))}
    </ul>
  </div>
);

export default UsersList;
