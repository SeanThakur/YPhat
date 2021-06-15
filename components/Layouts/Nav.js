import react from 'react';
import Link from 'next/link'
import styles from '../../styles/Nav.module.css';
import { setErrorClear, setLogout } from '../../feature/auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const Nav = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const auth = useSelector(state => state.auth);

    const handleLoginSubmit = () => {
        dispatch(setLogout())
        dispatch(setErrorClear())
        router.push('/login')
    }

    return (
        <div className={styles.nav}>
            <Link href='/'>
                <img 
                    src="/assets/images/login/logo.png"
                    className={styles.navLogo}
                />
            </Link>
            <div className={styles.navLinks}>
                {
                    auth.isAuth === true ?
                    <div
                        onClick={handleLoginSubmit}
                        className={styles.logout}
                    >
                        Logout
                    </div>
                    :
                    <>
                        <Link
                            href="/login"
                        >
                            Login
                        </Link>
                        <Link
                            href="/register"
                        >
                            Register
                        </Link>
                    </>
                }
            </div>
        </div>
    )
}

export default Nav
