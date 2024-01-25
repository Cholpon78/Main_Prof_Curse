import s from './ButtonComponent.module.css'

export default function ButtonComponent({ text, type, onClick }) {
  return (
    <button className={`${s.ui_button}`} type={type} onClick={onClick}>
      {text}
    </button>
  );
}
