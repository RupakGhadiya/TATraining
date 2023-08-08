import React, { useState } from "react";
import Web3 from "web3";
import "./Swap.css";
import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { MdSwapVert } from "react-icons/md";
import ethereum from "./ethereum.png";
import MetaMaskConnector from "../../Components/MetaMaskConnector";
const Swap = () => {
  const [balance, setBalance] = useState("");
  const [account, setAccount] = useState("");

  const getAccountAndBalance = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        const balance = await web3.eth.getBalance(accounts[0]);
        setBalance(web3.utils.fromWei(balance, "ether"));
      } catch (error) {
        console.error("Error retrieving account and balance:", error);
      }
    } else {
      console.error("MetaMask not detected!");
    }
  };
  return (
    <div className="swap">
      <div className="swapcontainer">
        <div className="swapcard">
          <div className="swaptop">
            <h1>
              Swap
              <span>
                <IoSettingsOutline />
              </span>
            </h1>
          </div>
          <div className="input">
            <div className="swapinput">
              <div className="swapinput1">
                <h1 id="swapfrom">Swap from</h1>
                <input></input>
                <p>
                  Balance: {" "}
                  <span>
                    0.0
                  </span>
                </p>
              </div>
              <div className="token">
                <img src={ethereum} />
                <select name="curr" className="currency">
                  <option value="eth">ETH</option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>
            </div>
            <div className="interchange">
              <hr className="line" />
              <button>
                <MdSwapVert />
              </button>
            </div>
            <div className="swapinput">
              <div className="swapinput1">
                <h1 id="swapto">Swap To</h1>
                <input></input>
                <p>
                  Balance:
                  <span>
                    0.0
                  </span>
                </p>
              </div>

              <Link to="/selectToken">
                <button className="currency2">Select a Token</button>
              </Link>
            </div>
          </div>
          <div>
            <button className="swapbtn">Enter an Amount</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;
