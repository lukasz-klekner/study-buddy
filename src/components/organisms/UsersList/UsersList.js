import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList, StyledTitle } from './UsersList.style';

const UsersList = ({ users, deleteUser }) => (
  <>
    <Wrapper>
      <StyledTitle>Students list</StyledTitle>
      <StyledList>
        {users.map((user) => (
          <UsersListItem key={user.name} userData={user} deleteUser={deleteUser} />
        ))}
      </StyledList>
    </Wrapper>
  </>
);

export default UsersList;
