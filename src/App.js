import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Start from './components/LandingPage/Start'
import AfterLoginCustomer from './components/LandingPage/AfterLogin_Customer'
import AfterLoginMechanic from './components/LandingPage/AfterLogin_Mechanic';
import CustomerPayment from './components/LandingPage/Payment_Customer';
import PDCustomer from './components/LandingPage/PD_Customer';
import withAuth from "./HOCs";
import CustomerHistory from './components/LandingPage/History_Customer';
import MechanicSchedule from './components/LandingPage/Schedule_Mechanic';
import MechanicHistory from './components/LandingPage/History_Mechanic';
import Maintenance from './components/Maintenance/Maintain';


function App() {
  const protectedPage = [
    withAuth(AfterLoginCustomer),
    withAuth(AfterLoginMechanic)
  ]

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/home" Component={protectedPage[0]} />
            <Route path="/customer" element={<AfterLoginCustomer />} />
            <Route path="/payment" element={<CustomerPayment />} />
            <Route path="/pd" element={<PDCustomer />} />
            <Route path="/history" element={<CustomerHistory />} />
            <Route path="/mechanic" element={<AfterLoginMechanic />} />
            <Route path="/schedule" element={<MechanicSchedule />} />
            <Route path="/feedback" element={<MechanicHistory />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="*" element={<Start />} />
        </Routes>
    </Router>
);
}

export default App;
