import styles from '../../styles/Footer.module.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <footer className={styles.mainFooter}>
                <div className={styles.containerFluid}>
                    <div className={styles.footerLogo}>
                        <img alt="#" src="/assets/images/logo.png" />
                        <p className={styles.tagline}>
                            Live like water, gentle like land Sống như nước, hiền như đất
                        </p>
                    </div>
                    <div className={styles.footerPlaceLinks}>
                        <a href="#">Home</a>
                        <a href="#">Buddhist Temples </a>
                        <a href="#"> Charities </a>
                        <a href="#"> Buddhism </a>
                        <a href="#"> Self Refuge </a>
                        <a href="#"> Self-Repent </a>
                        <a href="#"> Vegan Shop/Restaurants</a>
                        <a href="#"> Soul Learning</a>
                    </div>
                    <div className={styles.footerPlaceLinks}>
                        <a href="#">Buddhism Online Training </a>
                        <a href="#">Awakening Bell </a>
                    </div>
                    <div className={styles.footerSocial}>
                        <a href="#">
                            <FacebookIcon />
                        </a>
                        <a href="#">
                            <TwitterIcon />
                        </a>
                        <a href="#">
                            <InstagramIcon />
                        </a>
                        <a href="#">
                            <LinkedInIcon />
                        </a>
                    </div>
                    <div className={styles.footerPrivacyTerms}>
                        <p>
                            &copy; 2020 YPhat - All Right reserved!
                            <a href="#"> Privacy & Policy </a>
                            <a href="#"> Terms & Condition</a>
                        </p>
                    </div>
                    <div className={styles.footerVistior}>
                        <p>
                            No of Visitors
                            <span>4822</span>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
