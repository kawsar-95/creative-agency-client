import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MainHome from './component/Home/MainHome';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './component/Login/Login';
import ClientDashboard from './component/ClientSide/ClientDashboard';
import PrivateRoute from './component/Login/PrivateRoute';

import SendServices from './component/AddAllData/SendServices';
import AdminDash from './component/AdminDashboard/AdminDash';
import AdminSignIn from './component/AdminSignIn/AdminSignIn';

export const UserContext=createContext();



function App() {
  const [loggedInUser,setLoggedInUser]=useState({
    name:'',
    email:'',
    picture:''
  });
  return (
    
    <div className="App">
      
        <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
          <Router>
          
          <Switch>
         <Route exact path="/">
            <MainHome />
          </Route>

          <Route path="/adminSignIn"><AdminSignIn/></Route>
          <PrivateRoute path="/clientDash">
            <ClientDashboard/>
          </PrivateRoute>
          <Route path="/sendServices">
            <SendServices/>
          </Route>
           
          <Route path="/adminDash">
            <AdminDash/>
            </Route>
         
          <Route path="/login">
            <Login />
          </Route>
          {/* <Route path="/addAllTasks">
            <AddBulkData />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <PrivateRoute path="/yourTasks/:TaskID">
            <TaskContent></TaskContent>
          </PrivateRoute>
          
          <Route path="*">
            <Error />
          </Route> */}

        </Switch>
    
  {/* </Route> */}
 
     </Router>
     </UserContext.Provider>
    </div>
  );
}

export default App;
