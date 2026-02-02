import { Navbar, Footer } from "../../components";
import { Profile, CardList, About, Project } from "./index";
import GalaxyBackground from "../../components/galaxy-bg/GalaxyBackground";

function HomePage() {
  return (
    <div>
      <GalaxyBackground />
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
