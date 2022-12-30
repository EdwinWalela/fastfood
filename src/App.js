
import { Routes, Route } from 'react-router-dom'
import NavBar from './pages/Layout/NavBar';
import LandingPage from './pages/Landing';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import Menu from './pages/Menu'
import Footer from "./pages/Layout/Footer"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/sign-in" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<p>Not Found</p>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
