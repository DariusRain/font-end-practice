import React from 'react';
import {Provider} from "react-redux";
import AppRouter from "./components/router/AppRouter"; 
import logo from './logo.svg';
import './App.css';
import store from "../redux/configureStore";

function App() {
  return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
  )
}
export default App;
