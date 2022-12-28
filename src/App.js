import './App.css';
import NavBar from './pages/Layout/NavBar';
import LandingPage from './pages/Landing';
import Footer from "./pages/Layout/Footer"

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
