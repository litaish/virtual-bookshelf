import PropTypes from 'prop-types';
import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiBookEditOutline } from '@mdi/js';

export const EditableTextarea = ({ label, id, placeholder, name, initialValue }) => {
  const [isEditable, setIsEditable] = useState(true);
  const [value, setValue] = useState(initialValue);

  const handleToggleEdit = () => setIsEditable(!isEditable);

  const handleChange = e => setValue(e.target.value);

  const textareaPlaceholder = isEditable ? '' : placeholder;

  return (
    <div className="flex flex-col">
      <label
        className="mb-2 text-lg font-medium text-gray-900 md:text-2xl"
        htmlFor={id}
      >
        {label}
      </label>
      <div className='relative'>
        <textarea
          value={value}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-2.5 md:text-2xl resize-none"
          name={name}
          disabled={isEditable}
          id={id}
          placeholder={textareaPlaceholder}
          cols="30"
          rows="10"
        >
        </textarea>
        <button onClick={handleToggleEdit} className='absolute rounded-full bg-emerald-500 text-slate-50 p-2 transition-colors hover:bg-emerald-600 -top-3 -right-3' >
          <Icon path={mdiBookEditOutline} size={1.6} />
        </button>
      </div>
    </div>
  );
};

EditableTextarea.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  initialValue: PropTypes.string,
};
