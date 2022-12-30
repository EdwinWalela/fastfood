
import { Routes, Route } from 'react-router-dom'
import NavBar from './pages/Layout/NavBar';
import LandingPage from './pages/Landing';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import MenuPage from './pages/Menu'
import Footer from "./pages/Layout/Footer"
import MenuRedirect from './pages/Menu/menuRedirect';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/sign-in" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/menu/*">
          <Route path="salads" element={<MenuPage />}/>
          <Route path="dishes" element={<MenuPage />}/>
          <Route path="deserts" element={<MenuPage />}/>
          <Route path="*" element={<MenuRedirect />}/>
        </Route>
        <Route path="*" element={<p>Not Found</p>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
