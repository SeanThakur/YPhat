import Header from '../components/Home/Header'
import Organisation from '../components/Home/Organisation'
import CarouselSlider from '../components/Home/CarouselSlider'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <Organisation 
        name={'Buddhist Temples'}
        viewAll={true}
      />
      <Organisation 
        name={'Charities'}
        viewAll={true}
      />
      <Organisation 
        name={'Buddhist Classes and Meditation Classes'}
        viewAll={true}
      />
      <Organisation 
        name={'Activities and Events'}
        viewAll={true}
      />
      <Organisation 
        name={'Fund Raising Events'}
        viewAll={true}
      />
      <Organisation 
        name={'Donated Items nearby'}
        viewAll={true}
      />
      <CarouselSlider />
      <Organisation 
        name={'Vegan Shop/Restaurants'}
        viewAll={true}
      />
    </div>
  )
}
