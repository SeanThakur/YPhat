import React from 'react'
import Details from '../components/Details/Details'
import DetailsList from '../components/Details/DetailsList'
import SidebarDrawer from '../components/Details/Drawer'
import CarouselSlider from '../components/Home/CarouselSlider'
import Organisation from '../components/Home/Organisation'
import styles from '../styles/Desc.module.css'

const Desc = () => {
    return (
        <>
            <div className={styles.descIntro}>
                <SidebarDrawer />
                <Details />
                <DetailsList />
            </div>
            <div className={styles.descOrgItem}>
                <Organisation />
                <CarouselSlider />
            </div>
        </>
    )
}

export default Desc
