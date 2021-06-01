import FormField from '../components/molecules/FormField/FormField';
import { Button } from '../components/atoms/Button/Button';
import { ViewWrapper } from '../components/molecules/ViewWrapper/ViewWrapper';
import { Title } from '../components/atoms/Title/Title';

const AddUser = ({ handleAddUser, formValues, handleInputChange }) => (
  <ViewWrapper as="form" onSubmit={handleAddUser}>
    <Title>Add new student</Title>
    <FormField name="name" type="text" label="Name" value={formValues.name} onChange={handleInputChange} />
    <FormField name="attendance" type="text" label="Attendance" value={formValues.attendance} onChange={handleInputChange} />
    <FormField name="average" type="text" label="Average" value={formValues.average} onChange={handleInputChange} />
    <Button>Add</Button>
  </ViewWrapper>
);

export default AddUser;
