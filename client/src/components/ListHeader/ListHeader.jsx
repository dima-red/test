import React from 'react';
import styles from "../ListItem/ListItem.module.scss";

const ListHeader = () => {
    return (
        <>
            <div className={ styles.header } className={ styles.align }>
                <span>#</span>
                <span className={styles.name}>Full Name</span>
            </div>
        </>
    );
}

export default ListHeader;
