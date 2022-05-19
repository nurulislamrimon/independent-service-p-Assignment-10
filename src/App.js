import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Utilities/Header/Header';
import Footer from './Utilities/Footer/Footer';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Checkout from './Pages/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Home></Home>}></Route>
        <Route path='/checkout/:id' element={<Checkout></Checkout>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
