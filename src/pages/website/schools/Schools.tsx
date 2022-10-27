import { PageTopTitle, SchoolCard } from "../../../components";
import WebsiteLayout from "../../../components/layouts/WebsiteLayout/WebsiteLayout";
import { schools } from "./data";
import "./schools.scss";

const Schools = () => {
  return (
    <WebsiteLayout>
      <PageTopTitle text="schools" coloredText="Involved" />
      <div className="page-section">
        <div className="con">
          <div className="schools-grid">
            {schools.map((school, index) => (
              <SchoolCard key={index} name={school.name} image={school.image} />
            ))}
          </div>
        </div>
      </div>
    </WebsiteLayout>
  );
};

export default Schools;
