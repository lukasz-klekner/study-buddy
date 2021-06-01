import { ViewWrapper } from '../components/molecules/ViewWrapper/ViewWrapper';
import UserList from '../components/organisms/UsersList/UsersList';

const Dashboard = ({ users, deleteUser }) => (
  <ViewWrapper>
    <UserList users={users} deleteUser={deleteUser}></UserList>
  </ViewWrapper>
);

export default Dashboard;
