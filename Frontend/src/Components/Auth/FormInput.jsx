const FormInput = ({ label, name,register,type }) => {
  return (
    <div className=" form-control">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input

        type={type}
        name={name}
        className="input input-bordered"
      />
    </div>
  );
};

export default FormInput;
