import PropTypes from 'prop-types';
import { useContext } from 'react';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';
import { Wrapper, StyledGrade, StyledInfo } from './UsersListItem.style';
import { UsersContext } from '../../../providers/UsersProvider';
import { UserShape } from '../../../types/index';

const UsersListItem = ({ userData: { name, attendance = '0%', average } }) => {
  const { deleteUser } = useContext(UsersContext);
  return (
    <Wrapper>
      <StyledGrade average={average}>{average}</StyledGrade>
      <StyledInfo>
        <p>{name}</p>
        <p>{attendance}</p>
      </StyledInfo>
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UsersListItem;
