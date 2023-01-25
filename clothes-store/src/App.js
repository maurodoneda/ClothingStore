import './App.css';
import Home from "./pages/home/home.component";
import {Route, Routes} from "react-router-dom";
import NavBar from "./components/navbar/navbar.component";
import Shop from "./pages/shop/shop.component";
import Authentication from "./components/auth/auth.component";
import Checkout from "./pages/checkout/checkout.component";
import {createUserDoc, onAuthStateChangeListener} from "./utils/firebase/firebase.utils";
import {useEffect} from "react";
import {setCurrentUser} from "./store/user/user.actions";
import {useDispatch} from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return onAuthStateChangeListener((user) => {
      console.log('user', user);
      if(user){
        createUserDoc(user);
      }
      dispatch(setCurrentUser(user));
    })
  }, []);

  return (
    <Routes>
      <Route path='/' element={<NavBar/>}>
        <Route index element={<Home/>}/>
        <Route path={'shop/*'} element={<Shop/>}/>
        <Route path={'auth'} element={<Authentication/>}/>
        <Route path={'checkout'} element={<Checkout/>}/>
      </Route>
    </Routes>
  );
}

export default App;
