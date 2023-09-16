import './App.css';
import Navigation from "./components/navigation/navigation.component";
import Home from "./routes/home/home.component";
import { Routes, Route, Outlet } from 'react-router-dom';
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}
const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
