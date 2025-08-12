import Header from "../components/HeaderSection";
import PopularPage from "./PopularPage";

export const metadata = {
  title: "Popular Movies | Filming",
  description: "Discover the most popular movies currently trending.",
};

const page = () => {
  return (
    <div className="min-h-screen">
      <Header
        name="Popular Movies"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque alias modi ipsum labore exercitationem delectus esse rem assumenda repudiandae cumque."
      />
      <div className="container mx-auto px-4">
        <PopularPage />
      </div>
    </div>
  );
};

export default page;
