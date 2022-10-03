import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
    children?: React.ReactNode;
    size?: 'small' | 'big';
}

function Button({ children, size, ...props}: ButtonProps & React.HTMLAttributes<HTMLButtonElement>) {

    const sizeStyle = size === 'small' ? styles.buttonSmall : styles.buttonBig;

    return (
        <button className={`${styles.button} ${sizeStyle}`} { ...props }>
            { children }
        </button>
    );
}

export default Button;