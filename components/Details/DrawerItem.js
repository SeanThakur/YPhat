import React from 'react'
import styles from '../../styles/SidebarDrawer.module.css'
import { useRouter } from 'next/router'

const DrawerItems = ({Icon, name, route}) => {
    const router = useRouter();

    const routeLink = (e) => {
        e.preventDefault();
        if(route) {
            router.push(`${route}`);
        }
    }

    return (
        <div onClick={route && routeLink} className={styles.DrawerItems}>
            {Icon && <Icon className={styles.DrawerItems__Icon} />}
            {
                Icon && (
                    <h2 className={styles.DrawerItems__name}>
                        {name}
                    </h2>
                )
            }
        </div>
    )
}

export default DrawerItems
