import style from './home.module.scss';
import contentsContainerStyle from './contents-container.module.scss';
import icon from '../assets/images/icon.png';

export function Home() {
  const name = 'LIIU';
  return (
    <div className={ contentsContainerStyle.container }>
      <img className={ style.icon } src={ icon } alt="icon" />
      <div className={ style.name } data-text={ name }>
        { name }
      </div>
    </div>
  );
}
