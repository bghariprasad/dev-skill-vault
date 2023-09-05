import NavBar from "../../molecules/NavBar";
import QuestionBank from "../../organisms/QuestionBank";

function LibraryPage() {
  return (
    <div className="min-h-screen bg-bg-light">
      <div className="bg-skill min-h-screen">
        <NavBar />
        <QuestionBank />
      </div>
    </div>
  );
}

export default LibraryPage;
