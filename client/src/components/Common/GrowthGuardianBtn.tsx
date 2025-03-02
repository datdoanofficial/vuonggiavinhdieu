import React from "react";
import { Link } from "react-router-dom"; // import Link
import growthIcon from "../../assets/images/icons/growth_icon.png";
import "./GrowthGuardianBtn.scss";

type Props = {};

const GrowthGuardianBtn = (props: Props) => {
  return (
    <Link to="/health-system" className="health_system">
      <img src={growthIcon} alt="growth_guardian" />
      Hệ thống y tế
    </Link>
  );
};

export default GrowthGuardianBtn;
