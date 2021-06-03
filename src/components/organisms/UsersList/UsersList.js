import PropTypes from 'prop-types';

import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { Title } from '../../atoms/Title/Title';
import { StyledList } from './UsersList.style';
import { UserShape } from '../../../types/index';

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

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default UsersList;
