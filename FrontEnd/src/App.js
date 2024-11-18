import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home/index';
import SignIn from './Pages/SignIn/index';
import SignUp from './Pages/SignUp/index';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
