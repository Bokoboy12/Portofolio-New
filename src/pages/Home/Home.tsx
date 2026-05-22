import { Navbar, Footer } from "../../components";
import { Profile, CardList, About, Project } from "./index";
import ScrollToTop from "./utils/ScrollToTop";

function HomePage() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Profile />
      <CardList />
      <About />
      <Project />
      <Footer />
    </div>
  );
}

export default HomePage;
