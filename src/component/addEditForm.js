import React, { useState } from 'react';
import '../css/AddEditForm.css'; // Assuming the CSS file is named AddEditForm.css
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddEditForm = ({ user, onSubmit, onCancel, add}) => {
    const [name, setName] = useState(user ? user.name : '');
    const [description, setDescription] = useState(user ? user.description : '');
    const [dateTime, setDateTime] = useState(user ? user.dateTime : '');
    const [status, setStatus] = useState(user ? user.status : '');
    const [suberror,setError] = useState({})
    let errors = {};
    const [touched, setTouched] = useState({
      name: false,
      description: false,
      dateTime: false,
      status: false,
    });

    const handleInputChange = (field, value) => {
      switch (field) {
        case 'name':
          setName(value);
          break;
        case 'description':
          setDescription(value);
          break;
        case 'dateTime':
          setDateTime(value);
          break;
        case 'status':
          setStatus(value);
          break;
        default:
          break;
      }
    };

    const handleInputBlur = (field) => {
      setTouched({ ...touched, [field]: true });
      setError({})
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Check if any error exists
       errors = validateForm();
       setTouched({
        name: false,
        description: false,
        dateTime: false,
        status: false,
      });
      setError(errors)
      const hasErrors = Object.values(errors).some((error) => error);
      if (hasErrors) return;
  
      // If no errors, continue with your submit logic here
      onSubmit({ name, description, dateTime});
    };

    const validateForm = () => {
      errors = {
        name: !name ? 'name is required' : '',
        description: !description ? 'description is required' : '',
        dateTime: !dateTime ? 'date and time is required' : '',
        status: status === 'select status' ? 'status is required' : '',
      };
  
      return errors;
    };
  
    // const onCancel = () => {
    //   // Handle cancel action here
    // };

    return (
   <div className="todo-list-container">
     <div className="form-container">
       <form onSubmit={handleSubmit}>
       <label>
            Name<span className="required">*</span>
            <input
              type="text"
              value={name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              onBlur={() => handleInputBlur('name')}
            />
            {touched.name && !name && <div className="error-message">name is required</div>}
            {suberror && <div className="error-message"><span>{suberror.name}</span></div>}
          </label>
          <label>
            Description<span className="required">*</span>
            <textarea
              type='text'
              value={description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              onBlur={() => handleInputBlur('description')}
            />
            {touched.description && !description && (
              <div className="error-message">description is required</div>
            )}
            {suberror && <div className="error-message"><span>{suberror.description}</span></div>}
          </label>
      <label>
            Date Time<span className="required">*</span>
            </label>
            <DatePicker
              selected={dateTime}
              onChange={(date) => handleInputChange('dateTime', date)}
              onBlur={() => handleInputBlur('dateTime')}
              dateFormat="MMMM d, yyyy"
            />
            {touched.dateTime && !dateTime && (
              <div className="error-message">date and time is required</div>
            )}
            {suberror && <div className="error-message"><span>{suberror.dateTime}</span></div>}
          { !add && <label>
            Status<span className="required">*</span>
            <select
              value={status ? 'done' : 'upcoming'}
              onChange={(e) => handleInputChange('status', e.target.value)}
              onBlur={() => handleInputBlur('status')}
            >
              <option value="select status">Select Status</option>
              <option value="done">Done</option>
              <option value="upcoming">Upcoming</option>
            </select>
            {touched.status && status === 'select status' && (
              <div className="error-message">Status is required</div>
            )}
          </label>}
      <div className="button-container">
        <button type="submit">{add ? 'Add' : 'Update'}</button>
        <button type="button" onClick={onCancel}>Back</button>
      </div>
    </form>
      </div>
   </div>     
    );
  };

export default AddEditForm;