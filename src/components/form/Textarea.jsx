import PropTypes from 'prop-types';

export const Textarea = ({ label, id, placeholder, name }) => {
  return (
    <div className="flex flex-col">
      <label
        className="mb-2 text-lg font-medium text-gray-900 md:text-2xl"
        htmlFor={id}
      >
        {label}
      </label>
      <textarea
        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-2.5 md:text-2xl"
        name={name}
        id={id}
        placeholder={placeholder}
        cols="30"
        rows="10"
      />
    </div>
  );
};

Textarea.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
};
