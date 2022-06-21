import styles from "./styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.rightbar}>
      <div className={styles.container}>
        <div className={styles.closer}>&/9776;</div>
        <h4>Menu</h4>
        <ul className={styles.links}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Volunteering</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
