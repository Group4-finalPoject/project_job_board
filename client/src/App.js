import React from 'react';
import LogOrSignUp from './components/logOrSignUp';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/HomePage';
import LogIn from './components/logIn';
import SignUp from './components/signup';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


function App() {

  return <Routes>
    <Route path='/' element={<LogOrSignUp/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/login' element={<LogIn/>}/>
    <Route path='/signup' element={<SignUp/>}/>

  </Routes>;

}

export default App;
