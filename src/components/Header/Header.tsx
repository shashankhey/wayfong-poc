import "./Header.css";
import logo from "../../assets/WayFongLogo.webp";
import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";

const Header = () => {
  return (
    <div className="header flex justify-between items-center">
      <img src={logo} />
      <div>
        <Link
          className={buttonVariants({
            variant: "link",
          })}
          to="/lists"
        >
          List
        </Link>
        <Link
          className={buttonVariants({
            variant: "link",
          })}
          to="/"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default Header;
