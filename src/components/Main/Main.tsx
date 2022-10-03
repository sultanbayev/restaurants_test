import React from "react";
import styles from "./Main.module.css"

function Main() {
    return (
        <main className={styles.main}>
            <div className={styles.content}>
                <h1 className={styles.heading}>Популярные предложения</h1>
                <h3 className={styles.subheading}>Предложения, которые любят наши клиенты</h3>
            </div>
        </main>
    )
}

export default Main;