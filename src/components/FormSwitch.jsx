const FormSwitch = ({ formMode, setFormMode }) => {
    return (
      <p className="text-sm text-center">
        {formMode === "login" ? (
          <span
            className="text-gray-400 hover:underline cursor-pointer"
            onClick={() => setFormMode("signup")}
          >
            Don't have an account? Sign up
          </span>
        ) : (
          <span
            className="text-gray-400 hover:underline cursor-pointer"
            onClick={() => setFormMode("login")}
          >
            Already have an account? Login
          </span>
        )}
      </p>
    );
  };
  
  export default FormSwitch;
  