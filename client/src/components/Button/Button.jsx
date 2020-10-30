import React from 'react';
import styles from "./Button.module.scss";


const Button = ({text, cb}) => (
    <button className={ styles.btn } onClick={cb}>
        <span className={styles.text}>{text}</span>
    </button>
);

export default Button;
