import PropTypes from 'prop-types';

import { ViewWrapper } from '../components/molecules/ViewWrapper/ViewWrapper';
import UserList from '../components/organisms/UsersList/UsersList';
import { UserShape } from '../types/index';

const Dashboard = ({ users, deleteUser }) => (
  <ViewWrapper>
    <UserList users={users} deleteUser={deleteUser}></UserList>
  </ViewWrapper>
);

Dashboard.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default Dashboard;
