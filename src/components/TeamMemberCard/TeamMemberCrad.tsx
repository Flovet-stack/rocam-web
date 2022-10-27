import { SocialIcon } from "../../@types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faGitlab,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./team-members.scss";
export interface TeamMember {
  image: string;
  description: string;
  name: string;
  social?: SocialIcon[];
}
export interface teamMemberCardProps {
  data: TeamMember;
}

const TeamMemberCard = (props: teamMemberCardProps) => {
  return (
    <div className="team-member-card">
      <img src={props.data.image} alt={`${props.data.name}`} />
      <h5>{props.data.name}</h5>
      <p>{props.data.description}</p>
      {props.data.social && (
        <div className="social-icons">
          {props.data.social?.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              className="icon"
              rel="noreferrer"
            >
              {item.name === "facebook" && (
                <FontAwesomeIcon icon={faFacebookF} />
              )}
              {item.name === "twitter" && <FontAwesomeIcon icon={faTwitter} />}
              {item.name === "instagram" && (
                <FontAwesomeIcon icon={faInstagram} />
              )}
              {item.name === "github" && <FontAwesomeIcon icon={faGithub} />}
              {item.name === "gitlab" && <FontAwesomeIcon icon={faGitlab} />}
              {item.name === "linkedin" && (
                <FontAwesomeIcon icon={faLinkedin} />
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamMemberCard;
