import logoToDo from "../assets/logo.svg";

import styles from "./Header.module.css"

export function Header() {
  return (
    <header>
      <div className={styles.divHeader}>
        <img src={logoToDo} alt="Logo site" />
        
      </div>
    </header>
  );
}
