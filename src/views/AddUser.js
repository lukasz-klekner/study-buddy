import { useState, useContext } from 'react';

import FormField from '../components/molecules/FormField/FormField';
import { Button } from '../components/atoms/Button/Button';
import { ViewWrapper } from '../components/molecules/ViewWrapper/ViewWrapper';
import { Title } from '../components/atoms/Title/Title';
import { UsersContext } from '../providers/UsersProvider';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const AddUser = () => {
  const [formValues, setFormValues] = useState(initialFormState);
  const { handleAddUser } = useContext(UsersContext);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    handleAddUser(formValues);
    setFormValues(initialFormState);
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add new student</Title>
      <FormField name="name" type="text" label="Name" value={formValues.name} onChange={handleInputChange} />
      <FormField name="attendance" type="text" label="Attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField name="average" type="text" label="Average" value={formValues.average} onChange={handleInputChange} />
      <Button>Add</Button>
    </ViewWrapper>
  );
};

export default AddUser;
