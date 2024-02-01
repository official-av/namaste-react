import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

export const LogoComponent = () => (
  <Link to="/">
    <div className="w-24">
      <img className="" src={LOGO_URL} />
    </div>
  </Link>
);
