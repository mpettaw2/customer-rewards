import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,
 Route,
  Routes,
  Link 
   } from "react-router-dom";
import './index.css';


import AllCustomerRewards from "./controller/AllCustomerRewards";
import CustomerRewardsByMonthlyPeriod from "./controller/CustomerRewardsByMonthlyPeriod";
import CustomerRewardsByRecordId from "./controller/CustomerRewardsByRecordId";


export default function App(){
  return (
      <Router>

        <Routes>
          <Route path="/:id" element={<AllCustomerRewards />}/>
                  
          <Route path="/byRecordId/:id/:recordid" element={<CustomerRewardsByRecordId />}/>
          

          <Route path="/byPeriod/:id/:period" element ={<CustomerRewardsByMonthlyPeriod />}/>
          
        </Routes>
           
      
            
      </Router>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
