import style from "./Switch.module.css";

interface SwitchProps {
  onChange: () => void;
  checked: boolean;
}

const Switch = ({ onChange, checked }: SwitchProps) => {
  return (
    <label className={style["theme-switch"]}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className={`${style["slider"]} ${style["round"]}`}></span>
    </label>
  );
};

export default Switch;
