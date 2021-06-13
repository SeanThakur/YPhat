import Layout from '../components/Layouts/Layout'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../feature/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
