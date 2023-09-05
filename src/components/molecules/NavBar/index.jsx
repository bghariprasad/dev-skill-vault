import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const handleHomeNavigation = () => navigate("/");

  return (
    <div className="navbar bg-bg-primary">
      <div className="container max-w-screen-xl">
        <div className="navbar-start">
          <button
            onClick={handleHomeNavigation}
            className="btn btn-ghost normal-case text-2xl text-text-primary p-0"
          >
            DevSkillVault
          </button>
        </div>
        <div className="navbar-end flex ">
          <button className="btn btn-sm btn-link text-violet-700 hover:text-violet-800 no-underline hover:no-underline mr-4">
            Sign in
          </button>
          <button className="btn btn-sm text-white border-none bg-violet-700  hover:bg-violet-800">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
