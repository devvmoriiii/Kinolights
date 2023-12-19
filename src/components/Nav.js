// CSS import
import styles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <div className={styles.nav}>
      <ul className={styles.optionList}>
        <li className={styles.option}>영화/TV</li>
        <li className={styles.option}>플랫폼</li>
        <li className={styles.option}>장르</li>
        <li className={styles.option}>국가</li>
        <li className={styles.option}>년도</li>
      </ul>
      <button className={styles.sort}>인기순</button>
    </div>
  )
};

export default Nav;
