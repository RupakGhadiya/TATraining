import React, { useState } from "react";
import Web3 from "web3";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { GrFormClose } from "react-icons/gr"; 

function MetaMaskConnector(props) {
  const handleClick = () => {
    getAccountAndBalance();
    toggleShowA();
  };

  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);

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
    <div>
      <div>
        {/* <button onClick={getAccountAndBalance}>{props.Button}</button>
        {account && <p>Account: {account}</p>}
        {balance && <p>Balance: {balance} ETH</p>} */}

        <Button onClick={handleClick} className="mb-2">
          {props.Button}
        </Button>
        <Toast
          show={showA}
          onClose={handleClick}
          style={{
            width: "19rem",
            marginTop: "1rem",
            position: "absolute",
            height: "",
            padding: "10px",
            border: "2px solid grey",
            borderRadius: "20px",
          }}
        >
          <Toast.Body>
            <div
              style={{
                width: "17.7rem",
                wordWrap: "break-word",
                padding: "0.1px 10px",
                backgroundColor: "grey",
                borderRadius: "15px",
                fontWeight: "800",
                color: "white",
                textAlign: "center",
                cursor:"pointer"
              }}
            >
              {account && (
                <p>
                  Address
                  <hr />{" "}
                  <span style={{ fontWeight: "300", color: "ofwhite" }}>
                    {account}
                  </span>
                </p>
              )}
            </div>
            <div
              style={{
                width: "17.7rem",
                wordWrap: "break-word",
                padding: "0.1px 10px",
                backgroundColor: "grey",
                borderRadius: "15px",
                fontWeight: "800",
                color: "white",
                textAlign: "center",
                marginTop:"0.7rem"
              }}
            >
              {balance && (
                <p>
                  Balance: <span>{balance} ETH</span>
                  {props.balance}
                </p>
              )}
            </div>
          </Toast.Body>
        </Toast>
      </div>
    </div>
  );
}

export default MetaMaskConnector;
