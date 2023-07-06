
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashbord'
import Login from './components/Login'
import Home from './components/DoctorInfo/Home'
import MoreInfo1 from './components/DoctorInfo/MoreInfo1'
import MoreInfo from './components/DoctorInfo/MoreInfo'
import Admin from './components/Admin'
import PosterEditor from './components/Poster/Poster'


function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/dashboard/netcast-poster/:id' element={<Home></Home>}></Route>
        <Route path='/blood-info' element={<MoreInfo></MoreInfo>}></Route>
        <Route path='/blood-management' element={<MoreInfo1></MoreInfo1>}></Route>
        <Route path='/admin-portal' element={<Admin></Admin>}></Route>
        <Route path='/poster/:id' element={<PosterEditor></PosterEditor>}></Route>
      </Routes>
    </>
  )
}

export default App
