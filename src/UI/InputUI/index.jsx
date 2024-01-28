import s from "./InputComponent.module.css";

export default function InputComponent({
  placeholder,
  type,
  name,
  validation,
  value,
  onChange,
  autocomplete,
}) {
  return (
    <input
      className={`${s.ui_input} }`}
      placeholder={placeholder}
      type={type}
      name={name}
      {...validation}
      {...value}
      onChange={onChange}
      autocomplete={autocomplete}
    />
  );
}
