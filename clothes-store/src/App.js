import './App.css';
import Home from "./routes/home/home.component";
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/navbar/navbar.component";
import Shop from "./routes/shop/shop.component";
import Authentication from "./components/auth/auth.component";
import Checkout from "./routes/checkout/checkout.component";
import {createUserDoc, getCollectionAndDocs, onAuthStateChangeListener} from "./utils/firebase/firebase.utils";
import {useEffect} from "react";
import {setCurrentUser} from "./store/user/user.actions";
import {useDispatch} from "react-redux";
import {setCategories} from "./store/categories/categories.actions";

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
