import { useContext } from 'react';

import FormField from '../components/molecules/FormField/FormField';
import { Button } from '../components/atoms/Button/Button';
import { ViewWrapper } from '../components/molecules/ViewWrapper/ViewWrapper';
import { Title } from '../components/atoms/Title/Title';
import { UsersContext } from '../providers/UsersProvider';
import { useForm } from '../hooks/useForm';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
};

const AddUser = () => {
  const { handleAddUser } = useContext(UsersContext);
  const { formValues, handleInputChange, handleClearForm, handleThrowError, handleToggleConsent } = useForm(initialFormState);

  const handleSubmitUser = (e) => {
    e.preventDefault();

    if (formValues.consent) {
      handleAddUser(formValues);
      handleClearForm(initialFormState);
    } else {
      handleThrowError('You need to give consent');
    }
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add new student</Title>
      <FormField name="name" type="text" label="Name" value={formValues.name} onChange={handleInputChange} />
      <FormField name="attendance" type="text" label="Attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField name="average" type="text" label="Average" value={formValues.average} onChange={handleInputChange} />
      <FormField name="consent" type="checkbox" label="Consent" value={formValues.consent} onChange={handleToggleConsent} />
      <Button>Add</Button>
      {formValues.error ? <p>{formValues.error}</p> : null}
    </ViewWrapper>
  );
};

export default AddUser;
