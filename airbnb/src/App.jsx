import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


import Login from './screens/Login'
import Home from './screens/Home'
import Register from './screens/Register'
import Properties from './screens/Properties'
import AddProperty from './screens/AddProperty'
import PropertyDetails from './screens/PropertyDetails'
import Bookings from './screens/Bookings'
import UserDetails from './screens/UsersDetails'
import Users from './screens/Users'


function App() {
  return (
    <div className='container'>
    <Routes>
      <Route path='' element={<Login />}/>
      <Route path='login' element={<Login />}/>
      <Route path='home' element={<Home />} />
      <Route path='register' element={<Register />} />
      <Route path='properties' element={<Properties />} />
      <Route path='addProperty' element={<AddProperty />} />
      <Route path='property-details' element={<PropertyDetails />} />
      <Route path='users' element={<Users />} />
        <Route path='user-details' element={<UserDetails />} />
        <Route path='bookings' element={<Bookings />} />
      
    </Routes>
    <ToastContainer />

    </div>
  )
  
}

export default App
