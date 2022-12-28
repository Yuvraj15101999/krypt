export default function FormInput({
  placeholder,
  name,
  type,
  handleChange,
}) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      step='0.0001'
      onChange={(e) => {handleChange(e,name)}}
      className={`my-2 w-full  p-2 outline-none bg-transparent  text-white border-none text-sm white-glassmorphism`}
    />
  );
}
