function QuestionHeader({ title, description }) {
  return (
    <header>
      <h1 className="text-text-primary text-2xl py-4">{title}</h1>
      <p className="text-text-secondary pb-4">{description}</p>
    </header>
  );
}

export default QuestionHeader;
