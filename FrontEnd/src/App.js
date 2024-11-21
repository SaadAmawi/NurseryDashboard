import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home/index';
import SignIn from './Pages/SignIn/index';
import SignUp from './Pages/SignUp/index';
import Students from './Pages/Students/index';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/students" element={<Students />} />
    </Routes>
  );
}

export default App;
