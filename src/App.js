import './App.css';
import NavBar from './pages/Layout/NavBar';
import LandingPage from './pages/Landing';
import RegisterPage from './pages/Register';
import Footer from "./pages/Layout/Footer"

function App() {
  return (
    <div className="App">
      <NavBar />
      <RegisterPage />
      {/* <LandingPage /> */}
      <Footer />
    </div>
  );
}

export default App;
