import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { Title } from '../../atoms/Title/Title';
import { StyledList } from './UsersList.style';

const UsersList = ({ users, deleteUser }) => (
  <>
    <Title>Students list</Title>
    <StyledList>
      {users.map((user) => (
        <UsersListItem key={user.name} userData={user} deleteUser={deleteUser} />
      ))}
    </StyledList>
  </>
);

export default UsersList;
