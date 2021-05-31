import { Wrapper } from '../UsersList/UsersList.style.js';
import FormField from '../../molecules/FormField/FormField.js';
import { Button } from '../../atoms/Button/Button';

const Form = ({ handleAddUser, formValues, handleInputChange }) => (
  <Wrapper as="form" onSubmit={handleAddUser}>
    <h1>Add new student</h1>
    <FormField name="name" type="text" label="Name" value={formValues.name} onChange={handleInputChange} />
    <FormField name="attendance" type="text" label="Attendance" value={formValues.attendance} onChange={handleInputChange} />
    <FormField name="average" type="text" label="Average" value={formValues.average} onChange={handleInputChange} />
    <Button>Add</Button>
  </Wrapper>
);

export default Form;
