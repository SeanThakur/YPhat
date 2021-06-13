import React from 'react'
import styles from '../../styles/DetailsList.module.css'
import Image from 'next/image'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const DetailsListItem = () => {

    const myLoader = ({src}) => {
        return `https://assets.seniority.in/media/ktpl_blog${src}`
    }

    return (
        <div className={styles.detailsListItem}>
            <div className={styles.detailsListItem__Image}>
                <Image 
                    loader={myLoader}
                    src='/Temples_-_main_image.jpg'
                    height={150}
                    width={250}
                    alt="Image..."
                />
            </div>
            <div className={styles.detailsListItem__Content}>
                <h6>Mohe Rang Do Laal Official Video Song </h6>
                <p>
                    Eros Now 
                    <CheckCircleIcon 
                        className={styles.detailsListItem__Check} 
                    />
                </p>
                <p>43M views •2 years ago</p>
            </div>
        </div>
    )
}

export default DetailsListItem
