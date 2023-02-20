import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Service from './pages/Service';

// she wants a multipage app - green and gold theme
// probably home/landing/dashboard, user registration, user login, and services/scheduling

function App() {
  return (
    <div>
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/service' element={<Service />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
