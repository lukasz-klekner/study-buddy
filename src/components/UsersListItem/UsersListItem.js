import PropTypes from 'prop-types';

const UsersListItem = ({ userData: { name, attendance = '0%', average } }) => (
  <li>
    <div>{average}</div>
    <div>
      <p>{name}</p>
      <p>{attendance}</p>
    </div>
    <button>X</button>
  </li>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    attendence: PropTypes.string,
    average: PropTypes.string.isRequired,
  }),
};

export default UsersListItem;
