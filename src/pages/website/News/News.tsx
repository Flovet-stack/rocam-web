import { InformationCard, PageTopTitle } from "../../../components";
import WebsiteLayout from "../../../components/layouts/WebsiteLayout/WebsiteLayout";
import { news } from "./data";
import "./news.scss";

const News = () => {
  return (
    <WebsiteLayout>
      <PageTopTitle text="All our" coloredText="news" />
      <div className="page-section">
        <div className="con">
          <div className="news-grid">
            {news.map((item, index) => (
              <InformationCard
                key={index}
                text={item.text}
                image={item.image}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </WebsiteLayout>
  );
};

export default News;
