import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Footer from './pages/Shared/Footer/Footer';
import Blog from './pages/Shared/Header/Blog';
import Header from './pages/Shared/Header/Header';
import SignIn from './pages/Shared/SignIn/SignIn';
import SignUp from './pages/Shared/SignIn/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
