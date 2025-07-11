import React from 'react'
import styles from './index.module.css'
import generalStyles from '../index.module.css';
import Card from "../../components/card";

export const Allocations = () => {
    return (
        <div className={generalStyles.container}>
            <div className={styles.titleContainer}>
                <h1 className={generalStyles.title}>Selección de butaca</h1>
            </div>
            <p className={generalStyles.text}>
                En el corazón de una noche mágica, rodeados de risas, brindis y pasos de baile, una pareja celebra 10
                años de amor eterno… y tú formas parte del elenco principal. Pero cuando la música se apaga y las luces
                se atenúan, comienza una nueva historia: la de aquellos invitados que deciden extender la magia unas
                horas más, despertando sin prisa, con una sonrisa y (quizá) con un croissant en la mano.
                Una noche para recordar es una experiencia pensada para quienes vienen de lejos o simplemente quieren
                que la celebración no termine al decir “buenas noches”. Hotel cuidadosamente seleccionado, confort
                garantizado, y la promesa de despertar al día siguiente todavía soñando con la fiesta.
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
