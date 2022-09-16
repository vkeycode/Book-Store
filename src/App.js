
import './App.scss'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import Crud from './pages/admin';
import Login from './pages/login';
import { useAuth } from './context/use-auth';
import Register from './pages/register';
import AboutUs from './pages/aboutUs';


function App() {
  const { isAdmin, mode } = useAuth()
  return (
    <>
      <div className={"App " + mode}>
        <Routes>
          {
            isAdmin === true ?
              <>
                <Route path='/' element={<Home />} />
                <Route path='/admin' element={<Crud />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register/>} />
                <Route path='/aboutus' element={<AboutUs/>} />
              </>
              :
              <>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register/>} />
                <Route path='/aboutus' element={<AboutUs/>} />
              </>
          }
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
