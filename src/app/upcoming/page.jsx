import Header from "../components/HeaderSection";
import UpcomingPage from "./UpcomingPage";

export const metadata = {
  title: "Upcoming Movies | Filming",
  description: "Discover the most popular movies currently trending.",
};

const page = () => {
  return (
    <div className="min-h-screen">
      <Header
        name="Upcoming Movies"
        description="Choose your upcoming movies for your long summer holiday."
      />
      <div className="container mx-auto px-4">
        <UpcomingPage />
      </div>
    </div>
  );
};

export default page;
