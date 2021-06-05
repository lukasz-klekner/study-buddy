import { useState, useContext, useReducer } from 'react';

import FormField from '../components/molecules/FormField/FormField';
import { Button } from '../components/atoms/Button/Button';
import { ViewWrapper } from '../components/molecules/ViewWrapper/ViewWrapper';
import { Title } from '../components/atoms/Title/Title';
import { UsersContext } from '../providers/UsersProvider';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
};

const actionTypes = {
  inputChange: 'INPUT_CHANGE',
  clearValues: 'CLEAR_VALUES',
  consentToggle: 'CONSENT_TOGGLE',
  throwError: 'THROW_ERROR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.inputChange:
      return {
        ...state,
        [action.field]: action.value,
      };
    case actionTypes.clearValues:
      return initialFormState;
    case actionTypes.consentToggle:
      return {
        ...state,
        consent: !state.consent,
      };
    case actionTypes.throwError:
      return {
        ...state,
        error: action.errorValue,
      };
    default:
      return state;
  }
};

const AddUser = () => {
  const [formValues, dispatch] = useReducer(reducer, initialFormState);
  const { handleAddUser } = useContext(UsersContext);

  const handleInputChange = (e) => {
    dispatch({
      type: actionTypes.inputChange,
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();

    if (formValues.consent) {
      handleAddUser(formValues);
      dispatch({
        type: actionTypes.clearValues,
      });
    } else {
      dispatch({
        type: actionTypes.throwError,
        errorValue: 'You need to give consent',
      });
    }
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add new student</Title>
      <FormField name="name" type="text" label="Name" value={formValues.name} onChange={handleInputChange} />
      <FormField name="attendance" type="text" label="Attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField name="average" type="text" label="Average" value={formValues.average} onChange={handleInputChange} />
      <FormField
        name="consent"
        type="checkbox"
        label="Consent"
        value={formValues.consent}
        onChange={() => dispatch({ type: actionTypes.consentToggle })}
      />
      <Button>Add</Button>
      {formValues.error ? <p>{formValues.error}</p> : null}
    </ViewWrapper>
  );
};

export default AddUser;
