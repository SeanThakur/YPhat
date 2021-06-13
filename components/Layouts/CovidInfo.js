import React from 'react'
import styles from '../../styles/CovidAlert.module.css';

const CovidInfo = () => {
    return (
        <div className={styles.covidAlert}>
            <div className={styles.container}>
                <div className={styles.covidAlertInfo}>
                    <h2>COVID 19 Rising Fund for (a Charity to help)</h2>
                    <p>Help us support their work-make a donation</p>
                </div>
                <div className={styles.covidAlertBtn}>
                    <a href="#" className={styles.donateBtn}>
                        Donate Now
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CovidInfo
