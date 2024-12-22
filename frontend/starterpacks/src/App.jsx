import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './pages/Home';
import {UserPage} from './pages/user';
import {SignIn} from './pages/signin';
import {Results} from './pages/results';
import {Pack} from './pages/pack';
import {CreatePack} from './pages/createpack';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home  />}/>
        <Route exact path='/userpage' element={<UserPage  />}/>
        <Route exact path='/signin' element={<SignIn />}/>
        <Route exact path='/results' element={<Results />}/>
        <Route exact path='/pack' element={<Pack />}/>
        <Route exact path='/createpack' element={<CreatePack />}/>
      </Routes>
    </Router>
  )
}

export default App
