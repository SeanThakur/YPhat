import React from 'react'
import styles from '../../styles/Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h3>Pray For The World</h3>
                    <h2>
                        <span>We Pray For Coronavirus</span> pandemic is over
                    </h2>
                    <h2>and give peace back to people of the world</h2>
                </div>
                <div className="pray-section">
                    <a
                        href="#"
                        className="praybtn"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Click Here to Pray"
                    >
                        <img alt="#" id="image_two" src="/assets/images/header/pray.png" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
