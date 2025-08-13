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
        description="Watch popular movies from all acros the world."
      />
      <div className="container mx-auto px-4">
        <PopularPage />
      </div>
    </div>
  );
};

export default page;
