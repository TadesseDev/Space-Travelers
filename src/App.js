// import './App.scss';
import Navbar from './components/Navbar'
import Rockets from './components/pages/Rockets';
import Missions from './components/pages/Missions';
import Profile from './components/pages/Profile'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () =>
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Rockets />} />
      <Route path='/Missions' element={<Missions />} />
      <Route path='/Profile' element={<Profile />} />
    </Routes>
  </Router>


export default App;
