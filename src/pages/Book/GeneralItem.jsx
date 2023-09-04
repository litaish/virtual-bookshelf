import PropTypes from 'prop-types';

export const GeneralItem = ({ title, value }) => {
  return (
    <div>
      <p className="text-gray-800 text-2xl font-semibold">{title}</p>
      {/* Logic to display multiple items or just a single item based on if value is an array or not */}
      {Array.isArray(value) ? (
        <p className="text-gray-600 text-xl capitalize">
          {/* If value is an array, return an array of name property values and join them with comma */}
          {value.map(item => item.name).join()}
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
