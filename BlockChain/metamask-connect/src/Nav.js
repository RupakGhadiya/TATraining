import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { BsMoon } from "react-icons/bs";
import { GoKebabHorizontal } from "react-icons/go";
import MetaMaskConnector from "./Components/MetaMaskConnector";
const Nav = () => {
  return (
    <div className="nav">
      <div className="NavLogo">
        <h1>J$WAP</h1>
      </div>
      <div className="navLink">
        <Link className="NavlinkA" to="/swap">
          Swap
        </Link>
        <Link className="NavlinkA" to="/selectToken">
          Pool
        </Link>
        <Link className="NavlinkA" to="/transiction">
          About J$WAP
        </Link>
        <Link className="NavlinkA" to="/post">
          Vote
        </Link>
      </div>
      <div className="NavBtn">
        <Link>
          <button>0 SQA</button>
        </Link>
        <Link>
          {/* <button>Connect to Wallet</button> */}
          <MetaMaskConnector Button="Show account Details" />
        </Link>
        <Link>
          <button>
            <BsMoon />
          </button>
        </Link>
        <Link>
          <button>
            <GoKebabHorizontal />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
