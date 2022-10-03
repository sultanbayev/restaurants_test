import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
    children?: React.ReactNode;
    size?: 'small' | 'big';
}

function Button({ children, size, ...props}: ButtonProps) {
    return (
        <button className={ size === 'small' ? styles.buttonSmall : styles.buttonBig } { ...props }>
            { children }
        </button>
    );
}

export default Button;