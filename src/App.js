import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignIn from './components/Account/SignIn'
import SignUp from './components/Account/SignUp'
import YourProfile from './components/Account/Profile';
import ChangePassword from './components/Account/Password';
import Start from './components/LandingPage/Start'
import AfterLogin from './components/LandingPage/AfterLogin'
import Feedback from './components/Service/Feedback';
import ServiceDetails from './components/Service/ServiceDetails';

import withAuth from "./HOCs";


function App() {
  const protectedPage = [
    withAuth(AfterLogin),
  ]

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/info" element={<YourProfile />} />
            <Route path="/password" element={<ChangePassword />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/sd" element={<ServiceDetails />} />
            <Route path="/home" Component={protectedPage[0]} />
            <Route path="*" element={<Start />} />
        </Routes>
    </Router>
);
}

export default App;
