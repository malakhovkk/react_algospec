import logo from './logo.svg';
import './App.css';
import Problems from './components/Problems';
import Main from './components/Main';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/problems" element={<Problems/>}/>
        <Route path="/main" element={<Main/>}/>
        {/* <Route path="" element={}/> */}
      </Routes>
    </Router>
  );
}

export default App;
