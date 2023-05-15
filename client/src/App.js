import React from 'react';
import LogOrSignUp from './components/logOrSignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/HomePage';
import LogIn from './components/logIn';
import SignUp from './components/signup';
import { ProtectedRoute } from './components/protectedRoute';
import MyApplications from './components/MyApplications/MyApplications'


function App() {

  return (
  <Router>
  <Routes>
    <Route path='/' element={<LogOrSignUp />} />
    <Route path='/home' element={
      // <ProtectedRoute>
        <Home />
      /* </ProtectedRoute> */
    }/>
    <Route path='/login' element={<LogIn />} />
    <Route path='/signup' element={<SignUp />} />
    <Route path='/MyApplications' element={<MyApplications />} />


  </Routes>;
  </Router>
  )
}

export default App;
