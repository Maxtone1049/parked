import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import  Contact  from './components/Contact';
import Body from './components/Body';
function App() {
  return (
    <div className="home">
      <Router>
        <Routes>
          <Route path='/' element={<Body/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
      
    
    </div>
  );
}

export default App;
