import Button from '../../atoms/Button/Button';
import { Wrapper, StyledGrade, StyledInfo } from './UsersListItem.style';

import PropTypes from 'prop-types';

const UsersListItem = ({ deleteUser, userData: { name, attendance = '0%', average } }) => (
  <Wrapper>
    <StyledGrade average={average}>{average}</StyledGrade>
    <StyledInfo>
      <p>{name}</p>
      <p>{attendance}</p>
    </StyledInfo>
    <Button onClick={() => deleteUser(name)} />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    attendence: PropTypes.string,
    average: PropTypes.string.isRequired,
  }),
};

export default UsersListItem;
