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
import Dashboard from './pages/Dashboard/Dashboard';
import Users from './pages/Dashboard/Users';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AddTools from './pages/Dashboard/AddTools';
import AddReview from './pages/Dashboard/AddReview';
import Profile from './pages/Dashboard/Profile';
import ManageTools from './pages/Dashboard/ManageTools';
import ManageOrders from './pages/Dashboard/ManageOrders';
import MyOrders from './pages/Dashboard/MyOrders';
import Payment from './pages/Dashboard/Payment';
import Blogs from './pages/Blogs/Blogs';
import Portfolio from './pages/Portfolio/Portfolio';
import RequireAuth from './pages/Login/RequireAuth';
import RequireAdmin from './pages/Login/RequireAdmin'

function App() {
  return (
    <div className='bg-zinc-100 '>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/purchase/:id" element={<RequireAuth> <Purchase /> </RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>

        <Route path="*" element={<PageNotFound />} />
        


<Route path='/dashboard' element={ <RequireAuth><Dashboard></Dashboard></RequireAuth> }>
  <Route path='users' element={ <RequireAuth><Users></Users></RequireAuth> }></Route>
  <Route path='addTools' element={<AddTools></AddTools>}></Route>
  <Route path='addReview' element={<AddReview></AddReview>}></Route>
  <Route path='profile' element={<Profile></Profile>}></Route>
  <Route path='manageTools' element={ <RequireAdmin><ManageTools></ManageTools></RequireAdmin> }></Route>
  <Route path='manageOrders' element={ <RequireAdmin><ManageOrders></ManageOrders></RequireAdmin> }></Route>
  <Route path='myOrders' element={ <RequireAuth><MyOrders></MyOrders></RequireAuth> }></Route>
  <Route path='myOrders/payment' element={<Payment></Payment>}></Route>
  <Route index element={<Profile></Profile>}></Route>

</Route>


      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
