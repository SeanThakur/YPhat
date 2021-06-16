import React from 'react'
import Details from '../components/Details/Details'
import DetailsList from '../components/Details/DetailsList'
import SidebarDrawer from '../components/Details/Drawer'
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
                <Organisation 
                    name={'Events'}
                    viewAll={false}
                />
                <Organisation 
                    name={'Activities'}
                    viewAll={false}
                />
                <Organisation 
                    name={'Vegan Dishes'}
                    viewAll={false}
                />
            </div>
        </>
    )
}

export default Desc
