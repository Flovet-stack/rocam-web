import school1 from "../../../assets/images/school-1.png";
import school2 from "../../../assets/images/school-2.png";
import school3 from "../../../assets/images/school-3.png";
import news1 from "../../../assets/images/news-1.png";
import news2 from "../../../assets/images/news-2.png";
import news3 from "../../../assets/images/news-3.png";
import star from "../../../assets/icons/star.svg";
import store from "../../../assets/icons/store.svg";
import style from "../../../assets/icons/style.svg";

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

export { news, heroCards, schools };
