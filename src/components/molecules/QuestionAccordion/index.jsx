import Accordion from "../../atoms/Accordion";
import { LinkIcon } from "@heroicons/react/24/solid";

function QuestionAccordion({ heading, questions }) {
  const difficultyStyle = {
    Easy: "border-green-600 bg-green-600",
    Medium: "border-amber-600 bg-amber-600",
    Hard: "border-red-600 bg-red-600",
  };
  return (
    <div className="my-4">
      <Accordion heading={heading}>
        <div>
          {questions.map(({ id, title, difficulty, link }) => (
            <div
              key={id}
              className="my-4 flex text-xl font-medium text-white gap-4"
            >
              <span className="w-10/12 border-2 border-white p-4">{title}</span>
              <span
                className={`w-1/12 border-2 p-4 flex justify-center ${difficultyStyle[difficulty]}`}
              >
                {difficulty}
              </span>
              <a
                target="_blank"
                href={link}
                className="w-1/12 border-2 border-white p-4 flex justify-center"
                rel="noreferrer"
              >
                <LinkIcon className="h-6 w-6 font-semibold" />
              </a>
            </div>
          ))}
        </div>
      </Accordion>
    </div>
  );
}

export default QuestionAccordion;
