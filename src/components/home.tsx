import style from "./home.module.css";
import icon from "../assets/images/icon.png";

export function Home() {
  return (
    <div className={style.container}>
      <img className={ style.icon } src={ icon } alt="icon" />
      <div className={ style.name }>YBRLIIU</div>
    </div>
  );
}
