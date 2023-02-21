import style from './Header.module.css';
import logo from 'assets/img/logo.svg';
import { Container } from 'components/Container/Container';
import './header-container.css';

export const Header = () => (
  <header className={style.header}>
    <Container className={`${style.container} .header-container`}>
      <img className={style.logo} src={logo} alt="Логотип YourMeal" />
      <div className={style.wrapper}>
        <h1 className={style.title}>
          <span>Только самые</span>
          <span className={style.red}>сочные бургеры!</span>
        </h1>
        <p className={style.appeal}>Бесплатная доставка от 599&#8381;</p>
      </div>
    </Container>
  </header>
);
