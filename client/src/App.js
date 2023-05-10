import React from 'react';
import LogOrSignUp from './components/logOrSignUp';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/HomePage';
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
    
  </Routes>;

}

export default App;
