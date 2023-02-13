const TextInput = ({ value, handleChange, placeholder, name, type }) => {
  return (
    <div className="group w-full mb-3 relative form-input-group">
      <input
        required
        autoComplete="false"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        className="text-fill w-full h-[50px] outline-none border-none shadow-[0_0_0px_1000px_#2b2b2b_inset] bg-[#2b2b2b] px-5 text-[0.975rem] text-[#8d8d8d]"
      />
    </div>
  );
};

export default TextInput;
