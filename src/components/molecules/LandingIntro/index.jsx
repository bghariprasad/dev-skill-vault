import { useNavigate } from "react-router-dom";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

import LandingSticker from "../../../assets/monitoring.png";

import "./styles.css";

function LandingIntro() {
  const navigate = useNavigate();

  const renderContext = () => (
    <>
      <h1 className="text-9xl text-text-primary uppercase">
        OutSmart <br /> <span className="text-violet-700">Yourself</span>
      </h1>
      <h2 className="text-4xl text-text-primary mt-5">
        with our <br />
        <span className="">
          Premium<sup className="text-violet-700">+</sup> Service
        </span>
      </h2>
    </>
  );

  const handleNavigation = () => navigate("/library");

  const renderAction = () => (
    <button
      onClick={handleNavigation}
      className="rounded-full btn btn-wide mt-10 text-white border-none bg-violet-700  hover:bg-violet-800 text-lg"
    >
      DSA Library
      <ArrowLongRightIcon className="h-6 w-6 font-semibold" />
    </button>
  );

  const renderSticker = () => (
    <div className="w-96 mr-20">
      <img src={LandingSticker} className="moving-image" alt="landing image" />
    </div>
  );

  return (
    <section className="container max-w-screen-xl flex justify-between items-center m-auto landing">
      <div>
        {renderContext()}
        {renderAction()}
      </div>
      {renderSticker()}
    </section>
  );
}

export default LandingIntro;
