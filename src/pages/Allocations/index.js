import React from 'react'
import styles from './index.module.css'
import generalStyles from '../index.module.css';
import Card from "../../components/card";
import clsx from "clsx";

export const Allocations = () => {
    return (
        <div className={generalStyles.container}>
            <div className={styles.titleContainer}>
                <div className={clsx(generalStyles.title, generalStyles.marginTitle)}>Selección de butaca</div>
            </div>
            <p className={clsx(generalStyles.text, generalStyles.marginTop)}>
                Una pareja celebra 10 años de amor eterno… y tú formas parte del reparto principal.
                Una experiencia pensada para quienes vienen de lejos o para quienes
                que la celebración no termine cuando acabe la fiesta.
            </p>
            <Card direction={"column"}>
                <h4 className={styles.textSmall}>Hotel</h4>
                <h1 className={styles.textBig}>VILLA MARIA</h1>
                <h4 className={styles.textLight}>854 644 243 - 624 539 276</h4>
                <h5 className={styles.textSmall}>Calle Andalucía 2</h5>
                <h5 className={styles.textSmall}> San Jose de la Rinconada, Sevilla</h5>
            </Card>
        </div>
    )
}
