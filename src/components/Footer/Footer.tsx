import "./footer.scss";
import logo from "../../assets/logos/rocam-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapLocation,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="con">
          <div className="left">
            <img className="logo" src={logo} alt="ROCAM logo" />
            <p>
              Ad sit officia ea non laborum irure sint id pariatur nulla eiusmod
              duis mollit ut. Proident cillum enim nostrud occaecat irure
              ullamco sit nulla incididunt et eu dolore nulla. Ex id sit anim
              dolor
            </p>
            <div className="social-icons">
              <a href="/" className="icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="/" className="icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="/" className="icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          <div className="right">
            <div className="sub">
              <h6>Useful links</h6>
              <nav>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">About ROCAM</a>
                  </li>
                  <li>
                    <a href="/">Contact us</a>
                  </li>
                  <li>
                    <a href="/">Schools involved</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="sub">
              <h6>Get in touch</h6>
              <div className="contact">
                <div className="icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <p>+237 678 58 75 89</p>
              </div>
              <div className="contact">
                <div className="icon">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </div>
                <p>info@rocam.com</p>
              </div>
              <div className="contact">
                <div className="icon">
                  <FontAwesomeIcon icon={faMapLocation} />
                </div>
                <p>Bali, Douala Cameroon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="con">
          <p>
            &copy; 2022 <span>ROCAM</span>, All right Reserved, Designed by
            Seven DMA
          </p>
          <a href="/">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
