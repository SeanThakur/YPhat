import styles from '../../styles/Layout.module.css'
import Nav from './Nav'
import Footer from './Footer'
import CovidInfo from './CovidInfo'

const Layout = ({children}) => {
    return (
        <>
            <Nav />
            <div className={styles.container}>
                {children}
            </div>
            <CovidInfo />
            <Footer />
        </>
    )
}

export default Layout
