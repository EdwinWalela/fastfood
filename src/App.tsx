
import { Routes, Route } from 'react-router-dom'
import NavBar from './pages/Layout/NavBar/index';
import LandingPage from './pages/Landing/index';
import LoginPage from './pages/Login/index';
import RegisterPage from './pages/Register/index';
import CartPage from './pages/Cart/index'
import MenuPage from './pages/Menu/index'
import Footer from "./pages/Layout/Footer/index"
import MenuRedirect from './pages/Menu/menuRedirect';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/sign-in" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/menu/*">
          <Route path=":category" element={<MenuPage />}/>
          <Route path="*" element={<MenuRedirect />}/>
        </Route>
        <Route path="*" element={<p>Not Found</p>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
