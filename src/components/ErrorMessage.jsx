const ErrorMessage = ({ message }) => {
    return message ? <p className="text-red-500 text-sm">{message}</p> : null;
  };
  
  export default ErrorMessage;
  