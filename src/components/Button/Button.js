import React from 'react';
import styles from './Button.module.css'


const Button = ({isOutLine,text,icon}) => {
    return (
        <button className={isOutLine ? styles.outline_btn : styles.main_btn}>
            {icon}
            {text}
        </button>
    )
}

export default Button
