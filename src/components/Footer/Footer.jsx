import classNames from 'classnames';
import { Container } from 'components/Container/Container';
import style from './Footer.module.css';
import logo from 'assets/img/logo-o.svg';
import { ReactComponent as PhoneSvg } from 'assets/img/phone.svg';
import { ReactComponent as VkSvg } from 'assets/img/vk.svg';
import { ReactComponent as TelegramSvg } from 'assets/img/telegram.svg';

export const Footer = () => (
  <footer className={style.footer}>
    <Container>
      <div className={style.content}>
        <img className={style.logo} src={logo} alt="Логотип YourMeal" />
        <address className={style.address}>
          <div className={style.contact}>
            <h2 className={style.title}>Номер для заказа</h2>
            <a className={style.phone} href="tel:+79308333811">
              <PhoneSvg />
              <span>+7(930)833-38-11</span>
            </a>
          </div>
          <div className={style.contact}>
            <h2 className={classNames(style.title, style.title_sn)}>Мы в соцсетях</h2>
            <ul className={style.list}>
              <li className={style.item}>
                <a href="#" className={style.sn} aria-label="группа в вк">
                  <VkSvg />
                </a>
              </li>
              <li className={style.item}>
                <a href="#" className={style.sn} aria-label="канал в telegram">
                  <TelegramSvg />
                </a>
              </li>
            </ul>
          </div>
        </address>
        <div className={style.development}>
          <p>&copy; YouMeal, 2022</p>
          <p>
            Design: <a href="#">Anastasia Ilina</a>
          </p>
          <p>
            Developer: <a href="mailto:web-master@rootdiv.ru">Владимир</a>
          </p>
        </div>
      </div>
    </Container>
  </footer>
);
