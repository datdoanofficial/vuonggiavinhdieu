import React from 'react';
import { Link } from "react-router-dom"; // import Link
import "./Logo.scss";
import logo from "../../assets/images/logos/logo.png";

type Props = {}

const Logo = (props: Props) => {
  return (
    <Link to="/" className="header_logo" id="restartAnimation">
      <img src={logo} alt="logo" />
    </Link>
  )
}

export default Logo