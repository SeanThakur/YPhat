import React from 'react'

import styles from '../../styles/DetailsMain.module.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { Divider, IconButton, Tooltip } from '@material-ui/core';

const DetailsItem = () => {

    return (
        <div className={styles.DetailsItem}>
            <img 
                src='https://assets.seniority.in/media/ktpl_blog/Temples_-_main_image.jpg'
                alt="Image..."
                className={styles.DetailsItem__Image}
            />
            <div className={styles.DetailsItem__nameTemp}>                
                <div className={styles.DetailsItem__Title}>
                    <h4>Mingyue Lay Buddhist Temple Under Scrutiny</h4>
                    <div>
                        <Tooltip title="Share" arrow>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Favorites" arrow>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Donate" arrow>
                            <IconButton aria-label="donate">
                                <MonetizationOnIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
                <div className={styles.DetailsItem__ViewDates}>
                    <p>213,324 views</p>
                    <p className={styles.DetailsItem__Dates}>12 Dec 2020</p>
                </div>
            </div>
            <Divider light />
            <div className={styles.DetailsItem__Description}>                
                <h3>Description</h3>
                <div className={styles.DetailsItem__content}>
                    <p>Wat Phra Dhammakaya is a BuMhist temple in Khiong Luang Distnct m Me Pathumlham Province north of Bangkok. 
                        Thailand it was founded m 1970 by Me maech Chandra Khonnokyoong and Luang Pm Dhammajayo 
                        it is Me hest-Mom and the fastest growing temple of the Ohammakaya Tradmon
                    </p>
                    <p>Address: 23 Khlong Sam, ailong Luang Clang( Pathum Thani 12120. Thailand</p>
                    <p>Hours: Open 24 Hours</p>
                    <p>Important associated figures Luang Pu Sodh Candasarc</p>
                    <p>Phone: 66 2 831 1000</p>
                    <p>Established 1970 </p>
                    <p>Founders: Luang Por Dhammajavo, Chandra Khonnokyoong</p>
                    <p>History</p>
                    <p>Wet Phra Dhammakaya (Thai: THITAMIA1111) is a Buddhist temple in Thailand_ it was founded in 1970 by the moeghi (nun)
                        Chandra Khonnokyoong and Luang Por Dharnmajayo The temple's founding has roots in Me Dharnmakaya 
                        tradition founded by Luang Pu Sodh Candasaro Wat Paknarn Bhasicharoen in the early twentieth century
                    </p>
                </div>
            </div>
            <div className={styles.DetailsItem__Vedio}>                
                <h3>Video</h3>
                <div className={styles.DetailsItem__Vedio__Item}>
                    <img 
                        src='https://assets.seniority.in/media/ktpl_blog/Temples_-_main_image.jpg'
                        alt="Image..."
                        className={styles.DetailsItem__Image}
                    />
                </div>
            </div>
        </div>
    )
}

export default DetailsItem
