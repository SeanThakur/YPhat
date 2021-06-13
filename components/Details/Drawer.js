import React from 'react'
import styles from '../../styles/SidebarDrawer.module.css'
import DrawerItems from './DrawerItem'

// Icons
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import StarIcon from '@material-ui/icons/Star';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PublicIcon from '@material-ui/icons/Public';
import NotificationsIcon from '@material-ui/icons/Notifications';
import RoomIcon from '@material-ui/icons/Room';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import TuneIcon from '@material-ui/icons/Tune';
import SearchIcon from '@material-ui/icons/Search';

const SidebarDrawer = () => {
    return (
        <div className={styles.sidebarDrawer}>
            <DrawerItems 
                Icon={HomeIcon}
                name={'Home'}
                route={'/'}
            />
            <DrawerItems 
                Icon={FavoriteIcon}
                name={'Donation Item'}
                // route={'/donation'}
            />
            <DrawerItems 
                Icon={WhatshotIcon}
                name={'Organization'}
                // route={'/'}
            />
            <DrawerItems 
                Icon={StarIcon}
                name={'Favorites'}
                // route={'/donation'}
            />
            <DrawerItems 
                Icon={PlayArrowIcon}
                name={'Self Learning Programs'}
                // route={'/donation'}
            />
            <DrawerItems 
                Icon={PublicIcon}
                name={'Pray For The World'}
                // route={'/donation'}
            />
            <DrawerItems 
                Icon={NotificationsIcon}
                name={'Awakening Bell'}
                // route={'/donation'}
            />
            <DrawerItems 
                Icon={RoomIcon}
                name={'Buddhist & Meditation Classes'}
                // route={'/donation'}
            />
            <DrawerItems 
                Icon={LibraryBooksIcon}
                name={'Soul Learning Programs'}
                // route={'/donation'}
            />
            <h2 className={styles.sidebarDrawer__options}>OPTIONS</h2>
            <DrawerItems 
                Icon={TuneIcon}
                name={'Settings'}
                // route={'/donation'}
            />
            <DrawerItems 
                Icon={SearchIcon}
                name={'Find More'}
                // route={'/donation'}
            />
        </div>
    )
}

export default SidebarDrawer
