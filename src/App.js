import React, { Suspense, useEffect, Fragment } from "react";
import { withRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import "./assets/css/main.css"
import './assets/css/font-awesome.css'
import "react-alice-carousel/lib/alice-carousel.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "./components/Loader"
import Header from "./components/Header"
import Footer from "./containers/Footer"
import Routing from "./routes";
import { currentUserTokenAction } from "./redux/actions/currentUserTokenAction";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn } from "./utils/authentication"
import { signInAnonymouslyAPI } from './redux/api/signInAnonymouslyAPI'


function App(props) {
  const { location } = props;
  const isHome = (location.pathname === '/' || location.pathname === '/home') ? true : false;
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.loader.isLoading);
  const isLogged = isLoggedIn();

  useEffect(() => {
    if (window.performance) {
      if (performance.navigation.type === 1) {
        dispatch(currentUserTokenAction(isLoggedIn()))
      }
    }
  }, [dispatch]);


  useEffect(() => {
    // console.log('isLogged', isLogged)
    if (!isLogged) signInAnonymouslyAPI()
    // return () => {
    //   cleanup
    // }
  }, [isLogged]);

  return (
    <Suspense fallback={<Loader />}>
      <div id="cover-spin" style={{ display: isLoading ? 'block' : 'none' }}></div>
      <Fragment>
        {!isHome && <Header borderBottom={true} />}
        <Routing />
        <div className='footer-container'>
          <Footer />
        </div>
      </Fragment>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </Suspense>
  )
}

export default withRouter(App)
