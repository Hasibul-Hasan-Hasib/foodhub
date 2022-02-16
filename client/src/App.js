import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/notFound/NotFound';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Cart from './pages/cart/Cart';
import Food from './pages/food/Food';
import Restaurants from './pages/restaurants/Restaurants';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import AppBar from './components/appbar/AppBar';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <AppBar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/foods" exact element={<Food />} />
          <Route path="/restaurant" exact element={<Restaurants />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
