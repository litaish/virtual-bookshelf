import { useFormContext } from 'react-hook-form';
import { InputError } from './InputError';
import { AnimatePresence } from 'framer-motion';
import { findInputError, isFormInvalid } from '../../utils';
import PropTypes from 'prop-types';

export const Input = ({ label, type, id, placeholder, validation, name }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <label
          className="mb-2 text-lg font-medium text-gray-900 md:text-2xl"
          htmlFor={id}
        >
          {label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </AnimatePresence>
      </div>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-2.5 md:text-2xl"
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  validation: PropTypes.object,
  name: PropTypes.string.isRequired,
};
