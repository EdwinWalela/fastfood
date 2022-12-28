import './App.css';
import NavBar from './pages/Layout/NavBar';
import LandingPage from './pages/Landing';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import Footer from "./pages/Layout/Footer"

function App() {
  return (
    <div className="App">
      <NavBar />
      <LoginPage />
      {/* <RegisterPage /> */}
      {/* <LandingPage /> */}
      <Footer />
    </div>
  );
}

export default App;
