const FormField = ({ name, type, placeholder, value, onChange }) => {
    return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 text-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
    );
  };
  
  export default FormField;
  