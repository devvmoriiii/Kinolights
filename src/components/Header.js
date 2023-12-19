// CSS import
import styles from '../styles/Header.module.css';


const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src='/images/logo.png' alt='logo'/>
        <h1>Kinolights</h1>
      </div>
      <button className={styles.myPage}>My Page</button>
      <button className={styles.search}>
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default Header;