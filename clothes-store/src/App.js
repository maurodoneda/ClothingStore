import './App.css';
import Home from "./pages/home/home.page";
import {Route, Routes} from "react-router-dom";
import NavBar from "./components/navbar/navbar.component";
import Shop from "./pages/shop/shop.page";
import Authentication from "./components/auth/auth.component";
import Checkout from "./pages/checkout/checkout.page";
import {useEffect} from "react";
import {checkUserSession} from "./store/user/user.actions";
import {useDispatch} from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession())
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
