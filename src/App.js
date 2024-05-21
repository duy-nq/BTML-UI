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
    withAuth(AfterLoginMechanic),
    withAuth(CustomerPayment),
    withAuth(PDCustomer),
    withAuth(CustomerHistory),
    withAuth(MechanicSchedule),
    withAuth(MechanicHistory),
    withAuth(Maintenance)
  ]

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/customer" Component={protectedPage[0]} />
            <Route path="/payment" Component={protectedPage[2]} />
            <Route path="/pd" Component={protectedPage[3]} />
            <Route path="/history" Component={protectedPage[4]} />
            <Route path="/mechanic" Component={protectedPage[1]} />
            <Route path="/schedule" Component={protectedPage[5]} />
            <Route path="/feedback" Component={protectedPage[6]} />
            <Route path="/maintenance" Component={protectedPage[7]} />
            <Route path="*" element={<Start />} />
        </Routes>
    </Router>
);
}

export default App;
