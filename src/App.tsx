import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Homepage from "./pages/HomePage/HomePage";

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage />}></Route>
  </Routes>
</BrowserRouter>
}

export default App;
