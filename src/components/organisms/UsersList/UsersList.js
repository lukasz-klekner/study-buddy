import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UsersList.style';

const UsersList = ({ users, deleteUser }) => (
  <>
    <Wrapper>
      <ul>
        {users.map((user) => (
          <UsersListItem key={user.name} userData={user} deleteUser={deleteUser} />
        ))}
      </ul>
    </Wrapper>
  </>
);

export default UsersList;
