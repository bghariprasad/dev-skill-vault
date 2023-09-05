import QuestionAccordion from "../../molecules/QuestionAccordion";
import QuestionHeader from "../../molecules/QuestionHeader";

import { questionData } from "./question";

function QuestionBank() {
  const { title, description, topics } = questionData;

  return (
    <section className="container max-w-screen-xl">
      <QuestionHeader title={title} description={description} />
      {topics.map((topic) => (
        <>
          <QuestionAccordion
            key={topic.id}
            heading={topic.heading}
            questions={topic.questions}
          />
          <QuestionAccordion
            key={topic.id}
            heading={topic.heading}
            questions={topic.questions}
          />
        </>
      ))}
    </section>
  );
}

export default QuestionBank;
