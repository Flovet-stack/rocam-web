import "./page-top-title.scss";
import abstractLeft from "../../assets/icons/abstract-left.svg";
import abstractRight from "../../assets/icons/abstract-right.svg";
import iconOrangeHeart from "../../assets/icons/orange-hat.svg";
import iconBlackeHeart from "../../assets/icons/grey-hat-icon.svg";
import iconOrangePlus from "../../assets/icons/orange-times.svg";
import iconBlackPlus from "../../assets/icons/grey-times.svg";

interface pageTopTitleProps {
  text: string;
  coloredText: string;
}

const PageTopTitle = (props: pageTopTitleProps) => {
  return (
    <div className="page-top-title">
      <div className="con">
        <img
          className="abstract orange-hat vibrate-1"
          src={iconOrangeHeart}
          alt="abstract icon"
        />
        <img
          className="abstract orange-plus vibrate-2"
          src={iconOrangePlus}
          alt="abstract icon"
        />
        <img
          className="abstract black-plus vibrate-3"
          src={iconBlackPlus}
          alt="abstract icon"
        />
        <img
          className="abstract black-hat vibrate-4"
          src={iconBlackeHeart}
          alt="abstract icon"
        />
        <h1>
          {props.text} <span>{props.coloredText}</span>
        </h1>
      </div>
      <img className="abstract left" src={abstractLeft} alt="abstract shape" />
      <img
        className="abstract right"
        src={abstractRight}
        alt="abstract shape"
      />
    </div>
  );
};

export default PageTopTitle;
