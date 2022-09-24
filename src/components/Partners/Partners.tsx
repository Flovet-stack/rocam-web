import "./partners.scss";
import saaLogo from "../../assets/partners/seven-advanced-academy-logo.png";
import blueOceanLogo from "../../assets/partners/Blue Ocean-Travel-Consulting-and-Tourism-logo.png";
import educAssistLogo from "../../assets/partners/EducAssist-logo.png";
import ECCouncilLogo from "../../assets/partners/EC-Council-Logo.png";

const Partners = () => {
  return (
    <div className="partners">
      <img src={saaLogo} alt={"seven advanced academy logo"} />
      <img src={blueOceanLogo} alt={"blue ocean logog"} />
      <img src={educAssistLogo} alt={"educ assist logo"} />
      <img src={ECCouncilLogo} alt={"ec-council logo"} />
    </div>
  );
};

export default Partners;
