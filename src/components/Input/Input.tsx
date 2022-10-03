import React from "react";
import styles from "./Input.module.css";

type InputProps = {
    icon?: string;
}

function Input({ icon, ...props }: InputProps & React.HTMLAttributes<HTMLInputElement>) {

    const style = !!icon ? {
        background: "url(" + icon + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 18px center"
    } : undefined;

    return (
        <div className={styles.inputContainer}>
            <input style={style} className={styles.input} {...props} />
        </div>
    );
}

export default Input;