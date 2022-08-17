
import './App.css';
import AddNew from './Layout/AddNew';
import Body from './Layout/Body';
import {Routes,Route,} from "react-router-dom";
import { createContext, useState , useEffect, useCallback } from 'react';
import {URLLISTCART} from './constant'
import axios from 'axios';

export const Mycontext = createContext();

function App() {
  const [status,setStatus] = useState(true)
  const [dataListCart,setDataListCart] = useState([])
  const fecthData = useCallback(async() => {
   await axios.get(URLLISTCART).then(res => setDataListCart(res.data));
  },[status])
  useEffect(() => 
  {
    fecthData()
  }
  ,[fecthData])
  const reRender = () => {
    setStatus(!status);
    console.log("da Rerender");
  }
  const value = {
    status,
    reRender,
    dataListCart
  }
  return (
    <Mycontext.Provider value={value}>
      <div className="App container">
    <Routes>
      <Route path='/new' element={<AddNew />}></Route>
      <Route path='/' element={<Body />}></Route>
    </Routes>
    </div>
    </Mycontext.Provider>
  );
}

export default App;
