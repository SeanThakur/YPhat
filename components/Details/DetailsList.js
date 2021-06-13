import React from 'react'
import styles from '../../styles/DetailsList.module.css'
import DetailsListItem from './DetailsListItem'

const DetailsList = () => {
    return (
        <div className={styles.detailsList}>
            <DetailsListItem />
            <DetailsListItem />
            <DetailsListItem />
            <DetailsListItem />
        </div>
    )
}

export default DetailsList
