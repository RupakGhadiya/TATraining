import logo from './logo.svg';
import './App.css';
import MetaMaskConnector from './Components/MetaMaskConnector';
import Nav from './Nav';
import { Route, Routes } from "react-router-dom";
import Swap from './Pages/Swap/Swap';



function App() {
  return (
    <>
    {/* <MetaMaskConnector/> */}
    <Nav />
      <Routes>
        <Route path="/" element={<Swap />} />
        <Route path="/swap" element={<Swap />} />
      </Routes>
    </>
  );
}

export default App;
