// component imports
import WebsiteLayout from "../../../components/layouts/WebsiteLayout/WebsiteLayout";
import {
  CustomButton,
  InformationCard,
  Jumbotron,
  Partners,
  SchoolCard,
} from "../../../components";

// styles imports
import "./home.scss";

// images imports
import calendarUser from "../../../assets/icons/perm_contact_calendar.svg";
import heroImage from "../../../assets/images/hero-image.png";
import iconOrangeHeart from "../../../assets/icons/orange-hat.svg";
import iconOrangePlus from "../../../assets/icons/orange-times.svg";
import iconBlackPlus from "../../../assets/icons/grey-times.svg";
import star from "../../../assets/icons/star.svg";
import store from "../../../assets/icons/store.svg";
import style from "../../../assets/icons/style.svg";
import arrowBlackRight from "../../../assets/icons/arrow_forward.svg";
import aboutImage from "../../../assets/images/home-about-image.png";
import school1 from "../../../assets/images/school-1.png";
import school2 from "../../../assets/images/school-2.png";
import school3 from "../../../assets/images/school-3.png";
import news1 from "../../../assets/images/news-1.png";
import news2 from "../../../assets/images/news-2.png";
import news3 from "../../../assets/images/news-3.png";

const heroCards = [
  {
    icon: <img src={style} alt="icon" />,
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, possimus!",
  },
  {
    icon: <img src={star} alt="icon" />,
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, possimus!",
  },
  {
    icon: <img src={store} alt="icon" />,
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, possimus!",
  },
];

const schools = [
  {
    image: school1,
    name: "Seven Advanced Academy",
  },
  {
    image: school2,
    name: "Seven International University",
  },
  {
    image: school3,
    name: "International School Of Business",
  },
];

const news = [
  {
    image: news1,
    title: "Seven Advanced Academy",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt veritatis possimus, ipsum nam facilis aliquid quaerat odio omnis vitae totam molestias voluptatibus voluptas facere corrupti in amet necessitatibus explicabo rerum.",
  },
  {
    image: news2,
    title: "Seven International University",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt veritatis possimus, ipsum nam facilis aliquid quaerat odio omnis vitae totam molestias voluptatibus voluptas facere corrupti in amet necessitatibus explicabo rerum.",
  },
  {
    image: news3,
    title: "International School Of Business",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt veritatis possimus, ipsum nam facilis aliquid quaerat odio omnis vitae totam molestias voluptatibus voluptas facere corrupti in amet necessitatibus explicabo rerum.",
  },
];

const Home = () => {
  return (
    <WebsiteLayout>
      {/* home hero  */}
      <div className="home-hero">
        <div className="con">
          <div className="left">
            <h1>
              <span>Reach Out</span> Cameroon Schools
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              maiores officiis numquam sunt consequuntur, repellat accusamus
              accusantium, doloremque beatae doloribus laborum praesentium
              voluptatem possimus molestias. Explicabo itaque eligendi commodi
              adipisci?
            </p>
            <CustomButton
              type="button"
              text="About us"
              icon={calendarUser}
              skin="primary"
            />
          </div>
          <div className="right">
            <img src={heroImage} alt="" />
            <img
              src={iconOrangeHeart}
              alt=""
              className="vibrate-1 abstract-icon icon-1"
            />
            <img
              src={iconOrangeHeart}
              alt=""
              className="vibrate-2 abstract-icon icon-2"
            />
            <img
              src={iconOrangePlus}
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
      {/* home cards  */}
      <div className="home-cards">
        <div className="con">
          {heroCards.map((card, index) => (
            <div className="card" key={index}>
              {card.icon}
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* home about section  */}
      <div className="home-about">
        <div className="con">
          <div className="left">
            <h2>
              About <span>ROCAM</span>
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              maiores officiis numquam sunt consequuntur, repellat accusamus
              accusantium, doloremque beatae doloribus laborum praesentium
              voluptatem possimus molestias. Explicabo itaque eligendi commodi
              adipisci?
            </p>
            <CustomButton
              type="button"
              text="Learn more"
              icon={arrowBlackRight}
              skin="primary"
            />
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

      {/* home schools section  */}
      <div className="home-schools">
        <div className="con">
          <div className="section-title">
            <h2>
              Schools <span>Involved</span>
            </h2>
            <CustomButton
              type="button"
              text="View all"
              icon={arrowBlackRight}
              skin="primary"
            />
          </div>

          <div className="sub">
            {schools.map((school, index) => (
              <SchoolCard key={index} name={school.name} image={school.image} />
            ))}
          </div>
        </div>
      </div>

      {/* partners section  */}
      <div className="home-partners">
        <div className="con">
          <Partners />
        </div>
      </div>

      {/* become a partner section  */}
      <Jumbotron />

      {/* home news section  */}
      <div className="home-news">
        <div className="con">
          <div className="section-title">
            <h2>
              Latest <span>News</span>
            </h2>
            <CustomButton
              type="button"
              text="Read all"
              icon={arrowBlackRight}
              skin="primary"
            />
          </div>
          <div className="sub">
            {news.map((news, index) => (
              <InformationCard
                key={index}
                title={news.title}
                text={news.text}
                image={news.image}
              />
            ))}
          </div>
        </div>
      </div>
    </WebsiteLayout>
  );
};

export default Home;
