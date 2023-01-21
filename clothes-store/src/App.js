import './App.css';
import Home from "./routes/home/home.component";
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/navbar/navbar.component";
import Shop from "./routes/shop/shop.component";
import Authentication from "./components/auth/auth.component";
import Checkout from "./routes/checkout/checkout.component";

const App = () => {

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
