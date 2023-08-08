// components/Navbar.tsx
"use client";
import Link from "next/link";
import './Navbar.css'
import { AiOutlineSetting } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { SiGotomeeting } from "react-icons/si";
import { FiLogIn } from "react-icons/fi";
import { BiLogIn } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { useEffect } from "react";
const Navbar: React.FC = () => {
  const handleLogout = () => {
    window.alert("Logout successfully");
    localStorage.removeItem("user");
  };

  // Check if user data exists in localStorage

  return (
    <nav className="nav">
      <Link href="/home" className="title" style={{ marginTop: "10px" }}>
        <span className="span_logo">
          <SiGotomeeting />{" "}
        </span>
        MRBS
      </Link>

      <ul className="link_name">
        <li>
          <Link href="/home" className="linkaa">
            Overview
          </Link>
        </li>

        <li>
          <Link href="/contact" className="linkaa">
            Booking History
          </Link>
        </li>
      </ul>

      <ul className="link_icon">
        <li>
          <Link href="/about" className="iconaa">
            <IoMdNotificationsOutline />
          </Link>
        </li>

        <li>
          <Link href="/history" className="iconaa">
            <AiOutlineSetting />
          </Link>
        </li>
      </ul>

      <ul>
        <li></li>
        <li>
          <Link href="/login" className="login">
            <span className="loginlogo1">
              <BiLogIn />
            </span>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;