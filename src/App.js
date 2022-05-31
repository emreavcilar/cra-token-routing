import React, { useEffect, useState } from 'react';
import Routes from 'components/routes';
import { isTokenValid } from 'store/actions/shared/session/actions';
import {
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

/*
Oluşturulmuş olan routes dosyası başlar
*/

const App = () => {
  const [isSystemReady, setIsSystemReady] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    /*
    localstorage da token mevcut ise validliği kontrol edilir. 
    - eğer valid ise system ready true yapılır ve uygulama başlar. 
      kullanıcı home dan işlemlerine devam eder.
    - eğer valid değil ya da token yoksa da systemready true edilir
      kullanıcının login üzerinden giriş yapıp token alması sağlanır. 
    */
    const token = localStorage.getItem('access_token');

    if (token) {
      dispatch(isTokenValid(token, (res) => {
        if (res) {
          // redirect if token is valid
          // console.log('location', location)
          navigate(location.pathname);
        }
        setIsSystemReady(true);
      }));
    }
    else {
      setIsSystemReady(true);
    }

    return () => { }
  }, [])

  return (
    <>
      {isSystemReady &&
        <Routes />
      }
    </>

  );
}

export default App;
