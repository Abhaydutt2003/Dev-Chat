const SubmitBtn = ({ text, isLoading }) => {
  return (
    <button
      disabled={isLoading}
      className="btn btn-primary btn-block hover:btn-secondary"
    >
      {isLoading ? (
        <>
          <span className="loading loading-spinner"></span>
          sending...
        </>
      ) : (
        text || "submit"
      )}
    </button>
  );
};

export default SubmitBtn;
