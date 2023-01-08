import './App.css';
import Home from "./routes/home/home.component";
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/navbar/navbar.component";
import Shop from "./routes/shop/shop.component";
import SignIn from "./components/sign-in/sign-in.component";

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<NavBar/>}>
        <Route index element={<Home/>}/>
        <Route path={'shop'} element={<Shop/>}/>
        <Route path={'sign-in'} element={<SignIn/>}/>
      </Route>
    </Routes>
  );
}

export default App;
