import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import AllProducts from './pages/AllProducts/AllProducts';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Purchase from './pages/AllProducts/Purchase';
import Dashboard from './pages/Home/Dashboard';

function App() {
  return (
    <div className='bg-zinc-100 '>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={< Dashboard/>} />
        
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/purchase/:id" element={<Purchase />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
