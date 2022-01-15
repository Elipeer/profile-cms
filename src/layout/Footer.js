import main_logo from "../images/main_logo.png";
const Footer = () => {
  return (
    <>
      <hr />
      <div className="footer-wrapper">
        <div className="flex">
          <ul className="ul-footer">
            <li>How it works</li>
            <li>About us</li>
            <li>FAQ</li>
            <li>Contact us</li>
          </ul>
          <ul className="ul-footer">
            <li>Terms of use</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <hr />
        <div className="pt-12 flex items-center inset-x-0 mb-10">
          <img src={main_logo} alt="main-logo" className="mr-20" />
          <div>©All rights reserved by PURPLE 2022</div>
        </div>
      </div>
    </>
  );
};
export default Footer;
