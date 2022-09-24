import "./information-card.scss";
import arrowOrangeRight from "../../assets/icons/arrow_forward_orange.svg";

export interface InformationCarProps {
  image: string;
  text: string;
  title: string;
}

const InformationCard = (props: InformationCarProps) => {
  return (
    <div className="information-card">
      <img src={props.image} alt={`${props.title}`} />
      <h5>{props.title}</h5>
      <p>{props.text}</p>
      <div className="discover-button">
        <span>Discover</span>
        <img src={arrowOrangeRight} alt="arrow right icon" />
      </div>
    </div>
  );
};

export default InformationCard;
