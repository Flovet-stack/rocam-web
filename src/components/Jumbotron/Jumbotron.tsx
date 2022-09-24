import "./jumbotron.scss";
import handsIcon from "../../assets/icons/hands-icon-circle.png";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="sub">
        <div className="con">
          <h1>Become a partner</h1>
          <p>
            Adipisicing occaecat officia eiusmod eiusmod quis ipsum enim tempor
            magna non tempor anim anim. Culpa ad culpa ad velit. Duis pariatur
            veniam non excepteur consequat. Velit ex elit anim dolore consequat
            do excepteur tempor eu amet consectetur.
          </p>
          <button>
            Become a partner <img src={handsIcon} alt="handshake icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
