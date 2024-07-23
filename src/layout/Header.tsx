import { FC } from "react";
import styles from "./styles.module.scss";
import { ReactComponent as LogoSVG } from "../assets/logo.svg";
import { ReactComponent as ArrowSVG } from "../assets/arrow.svg";

interface HeaderProps {
  navigation: any[];
}

export const Header: FC<HeaderProps> = ({ navigation }) => {
  return (
    <header className={styles.header}>
      <LogoSVG className={styles.logo} />
      <div className={styles.nav}>
        {navigation.map((item) => (
          <div className={styles.nav_item} key={item.title}>
            <div>{item.title}</div>
            <ArrowSVG className={styles.arrow} />
          </div>
        ))}
        <button className={styles.contact}>Contact Us</button>
      </div>
    </header>
  );
};
