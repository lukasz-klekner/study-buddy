import PropTypes from 'prop-types';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { Title } from '../../atoms/Title/Title';
import { StyledList } from './UsersList.style';
import { UserShape } from '../../../types/index';

const UsersList = ({ users }) => (
  <>
    <Title>Students list</Title>
    <StyledList>
      {users.map((userData) => (
        <UsersListItem key={userData.name} userData={userData} />
      ))}
    </StyledList>
  </>
);

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
};

export default UsersList;
