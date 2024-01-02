import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

export const LogoComponent = () => (
  <Link to="/">
    <div className="logo-container">
      <img className="logo" src={LOGO_URL} />
    </div>
  </Link>
);
