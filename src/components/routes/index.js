import {
  Route,
  Routes,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import PrivateRoute from './privateRoute';
import Header from 'components/layout/header';
import Login from 'containers/login';
import Home from 'containers/home';
import About from 'containers/about';
import Dashboard from 'containers/dashboard';
import ForgotPassword from 'containers/forgot-pass';

/*
uygulamadaki route lar aşağıda tanımlanır. 
Login olmadan girilmemesi gereken routelar private route componenti ile wrap edilir. 
*/

const AppRoutes = () => {
  const accessToken = useSelector(state => state.sessionReducer.accessToken);

  return (
    <main className="">
      {accessToken &&
        <Header />
      }

      <section>
        <Routes>
          {/* AUTH ROUTES */}
          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/" element={<Home />} />
          </Route>
          <Route path="/about" element={<PrivateRoute />}>
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          {/* NO AUTH ROUTES */}
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

        </Routes>
      </section>
    </main>
  )
}

export default AppRoutes;
