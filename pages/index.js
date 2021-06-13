import Header from '../components/Home/Header'
import Organisation from '../components/Home/Organisation'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <Organisation />
    </div>
  )
}
