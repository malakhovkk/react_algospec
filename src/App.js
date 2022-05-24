import logo from './logo.svg';
import './App.css';
import Problems from './components/Problems';
import Main from './components/Main';
import LogIn from './components/LogIn';
import Regist from './components/Regist';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/problems" element={<Problems/>}/>
        <Route path="/main" element={<Main/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/registration" element={<Regist/>}/>
        {/* <Route path="" element={}/> */}
      </Routes>
    </Router>
  );
}

export default App;
