import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignIn from './components/Account/SignIn'
import SignUp from './components/Account/SignUp'
import YourProfile from './components/Account/Profile';
import ChangePassword from './components/Account/Password';
import Start from './components/LandingPage/Start'
import AfterLoginCustomer from './components/LandingPage/AfterLogin_Customer'
import AfterLoginMechanic from './components/LandingPage/AfterLogin_Mechanic';
import Feedback from './components/Service/Feedback';
import ServiceDetails from './components/Service/ServiceDetails';
import CustomerPayment from './components/LandingPage/Payment_Customer';
import PDCustomer from './components/LandingPage/PD_Customer';
import withAuth from "./HOCs";
import CustomerHistory from './components/LandingPage/History_Customer';


function App() {
  const protectedPage = [
    withAuth(AfterLoginCustomer),
    withAuth(AfterLoginMechanic)
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
            <Route path="/customer" element={<AfterLoginCustomer />} />
            <Route path="/payment" element={<CustomerPayment />} />
            <Route path="/pd" element={<PDCustomer />} />
            <Route path="/history" element={<CustomerHistory />} />
            <Route path="/mechanic" element={<AfterLoginMechanic />} />
            <Route path="*" element={<Start />} />
        </Routes>
    </Router>
);
}

export default App;
