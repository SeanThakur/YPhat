import Layout from '../components/Layouts/Layout'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../feature/store'
import setAuthToken from '../utils/setAuthToken';
import { setCurrentUser, setLogout } from '../feature/auth/actions';
import jwt_decode from "jwt-decode";

if(typeof window !== "undefined" && window.localStorage.jwtLoginToken)
{
  //Checking if token present in localstorage then login persist
  setAuthToken(window.localStorage.jwtLoginToken);
  const decoded = jwt_decode(window.localStorage.jwtLoginToken);
  store.dispatch(setCurrentUser(decoded));
  //logout the user
  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime)
  {
    store.dispatch(setLogout());
    router.push('/login');
  }
}

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
