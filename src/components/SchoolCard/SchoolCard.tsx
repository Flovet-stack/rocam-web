import "./school-card.scss";
import arrowOrangeRight from "../../assets/icons/arrow_forward_orange.svg";

export interface schoolCarProps {
  image: string;
  name: string;
}

const SchoolCard = (props: schoolCarProps) => {
  return (
    <div className="school-card">
      <img src={props.image} alt={`${props.name}`} />
      <h5>{props.name}</h5>
      <div className="discover-button">
        <span>Discover</span>
        <img src={arrowOrangeRight} alt="arrow right icon" />
      </div>
    </div>
  );
};

export default SchoolCard;
