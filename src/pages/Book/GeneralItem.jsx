import PropTypes from 'prop-types';

// If value is an array, this function is used to return all object name property values into one string
const extractArrayNameValues = arr => arr.map(item => item.name).join();

export const GeneralItem = ({ title, value }) => {
  return (
    <div>
      <p className="text-gray-800 text-2xl font-semibold">{title}</p>
      {/* Logic to display multiple items or just a single item based on if value is an array or not */}
      {Array.isArray(value) ? (
        <p className="text-gray-600 text-xl capitalize">
          {extractArrayNameValues(value)}
        </p>
      ) : (
        <p className="text-gray-600 text-xl capitalize">{value}</p>
      )}
    </div>
  );
};

GeneralItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};
