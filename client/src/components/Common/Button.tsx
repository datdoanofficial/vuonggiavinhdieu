import React from 'react'
import { Link } from "react-router-dom"; // import Link
import "./Button.scss";

type Props = {}

const Button = (props: Props) => {
  return (
    <Link to="/login" className="login">
      Đăng nhập
    </Link>
  )
}

export default Button