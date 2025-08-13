import Header from "../components/HeaderSection";
import TopRatedPage from "./TopRatedPage";

export const metadata = {
  title: "Top Rated | Filming",
  description: "Discover the most popular movies currently trending.",
};

const page = () => {
  return (
    <div className="min-h-screen">
      <Header
        name="Top Rated Movies"
        description="Find top rated movies for your holiday."
      />
      <div className="container mx-auto px-4">
        <TopRatedPage />
      </div>
    </div>
  );
};

export default page;
