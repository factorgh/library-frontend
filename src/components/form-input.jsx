// FormInput.js
import PropTypes from "prop-types";
import { forwardRef } from "react";

const FormInput = forwardRef(
  ({ label, type = "text", name, placeholder, error, ...rest }, ref) => {
    return (
      <div className="w-full mb-4">
        {label && (
          <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
          </label>
        )}
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          ref={ref}
          className={`w-full px-4 py-2 border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
          {...rest}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
      </div>
    );
  }
);

// Set the display name for debugging and avoiding warnings
FormInput.displayName = "FormInput";

FormInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.object,
};

export default FormInput;
