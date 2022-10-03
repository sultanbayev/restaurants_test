import React from "react";
import styles from "./AppHeader.module.css";
import Button from "../Button";

function AppHeader() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <a href="./">Главная</a></li>
                </ul>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <a href="./register">Регистрация</a>
                    </li>
                    <li className={`${styles.navItem} ${styles.loginButton}`}>
                        <a href="./login">
                            <Button size="small">Войти</Button>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default AppHeader;