import s from './ButtonComponent.module.css'

export default function ButtonComponent({
  text,
  type,
  onClick,
  fontSize,
  color,
  padding,
  background,
  borderColor,
}) {
  const buttonStyle = {
    fontSize: fontSize || "inherit",
    color: color || "inherit",
    padding: padding || "16px 32px",
    background: background || "inherit",
    border: `1px solid ${borderColor || "var(--grey-divider, #DDD)"}`,
  };

  return (
    <button
      className={`${s.ui_button}`}
      style={buttonStyle}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
