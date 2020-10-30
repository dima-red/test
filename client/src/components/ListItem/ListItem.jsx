import React from 'react';
import styles from "./ListItem.module.scss";

const ListItem = ({data}) => (
    <>
        {
            data.map((item, i) => (
                <div key={i+1} className={ styles.listItemtWrapper } className={ styles.align }>
                    <span>{i+1}</span>
                    <span className={styles.name}>{item.fullName}</span>
                </div>
            ))
        }
    </>
);

export default ListItem;
