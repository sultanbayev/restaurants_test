import React from "react";
import styles from "./AppHeader.module.css";
import Button from "../Button";
import { Link } from "react-router-dom";

function AppHeader() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link to="/">Главная</Link>
                    </li>
                </ul>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                    <Link to="/register">Регистрация</Link>
                    </li>
                    <li className={`${styles.navItem} ${styles.loginButton}`}>
                        <Link to="/login">
                            <Button size="small">Войти</Button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default AppHeader;