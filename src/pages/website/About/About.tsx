import {
  Jumbotron,
  PageTopTitle,
  Partners,
  TeamMemberCard,
} from "../../../components";
import WebsiteLayout from "../../../components/layouts/WebsiteLayout/WebsiteLayout";
import aboutImage from "../../../assets/images/home-about-image.png";
import iconOrangeHeart from "../../../assets/icons/orange-hat.svg";
import iconBlackPlus from "../../../assets/icons/grey-times.svg";
import "./about.scss";
import { ReactNode } from "react";
import { aboutCardInfo, teamMembers } from "./data";

interface aboutCardProps {
  icon: ReactNode;
  title: string;
  text: string;
}

const About = () => {
  const AboutCard = (props: aboutCardProps) => {
    return (
      <div className="about-card">
        {props.icon}
        <h4>
          our <span>{props.title}</span>
        </h4>
        <p>{props.text}</p>
      </div>
    );
  };

  return (
    <WebsiteLayout>
      <PageTopTitle text="About" coloredText="ROCAM" />

      {/* about section  */}
      <div className="page-section about-rocam">
        <div className="con">
          <div className="left">
            <h2>
              About <span>ROCAM</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
              volutpat porttitor faucibus sit elit. Eget tellus nibh facilisis
              porttitor nunc arcu, pretium aliquam. Pharetra, aenean interdum
              sagittis consectetur id viverra urna urna dictum. Consectetur diam
              pretium porttitor a. Urna, ligula vitae ac risus neque quam et
              gravida. Ultricies sem ipsum elit tortor, nunc fusce egestas
              hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Imperdiet volutpat porttitor faucibus sit elit. Eget tellus nibh
              facilisis porttitor nunc arcu, pretium aliquam. Pharetra, aenean
              interdum sagittis consectetur id viverra urna urna dictum.
              Consectetur diam pretium porttitor a. Urna, ligula vitae ac risus
              neque quam et gravida. Ultricies sem ipsum elit tortor, nunc fusce
              egestas hendrerit. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
          <div className="right">
            <img src={aboutImage} alt="" />
            <img
              src={iconOrangeHeart}
              alt=""
              className="vibrate-3 abstract-icon icon-3"
            />
            <img
              src={iconBlackPlus}
              alt=""
              className="vibrate-4 abstract-icon icon-4"
            />
          </div>
        </div>
      </div>

      <div className="page-section about-cards">
        <div className="con">
          {aboutCardInfo.map((card, index) => (
            <AboutCard
              key={index}
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>

      <div className="page-section about-partners">
        <div className="con">
          <div className="section-title">
            <h2>
              Our <span>Partners</span>
            </h2>
          </div>
          <Partners />
        </div>
      </div>

      {/* become a partner section  */}
      <Jumbotron />

      {/* team  */}
      <div className="page-section about-partners">
        <div className="con">
          <div className="section-title">
            <h2>
              Our <span>Team</span>
            </h2>
          </div>
          <div className="team-members">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} data={member} />
            ))}
          </div>
        </div>
      </div>
    </WebsiteLayout>
  );
};

export default About;
