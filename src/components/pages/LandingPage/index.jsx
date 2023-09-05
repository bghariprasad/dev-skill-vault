import LandingIntro from "../../molecules/LandingIntro";
import NavBar from "../../molecules/NavBar";

function LandingPage() {
  return (
    <div className="bg-bg-light min-h-screen">
      <NavBar />
      <LandingIntro />
    </div>
  );
}

export default LandingPage;
