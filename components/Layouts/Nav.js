import react from 'react';
import Link from 'next/link'

import styles from '../../styles/Nav.module.css';

const Nav = () => {
    return (
        <div className={styles.nav}>
            <Link href='/'>
                <img 
                    src="/assets/images/login/logo.png"
                    className={styles.navLogo}
                />
            </Link>
            <div className={styles.navLinks}>
                <Link
                    href="/login"
                >
                    <a>Login</a>
                </Link>
                <Link
                    href="/register"
                >
                    Register
                </Link>
            </div>
        </div>
    )
}

export default Nav
