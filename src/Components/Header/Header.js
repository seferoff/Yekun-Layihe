import "./Header.css";
import companyLogo from "../../icons/company-logo.jpeg";

const Header = () => {

  return (
    <div className="header">
      <div className="head-pic">
        <div className="head-div">
          S.A.F. COMPANY
          <div className="author">created by Safaroff Intigam</div>
        </div>
        <div className="logo-div">
          <img className="company-logo" src={companyLogo} alt="Company-logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
