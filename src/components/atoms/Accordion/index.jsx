function Accordion({ heading, children }) {
  return (
    <section>
      <div className="rounded-none collapse collapse-arrow bg-transparent">
        <input type="checkbox" className="peer" />
        <div className="rounded collapse-title bg-violet-700 text-primary-content peer-checked:text-secondary-content">
          {heading}
        </div>
        <div className="collapse-content peer-checked:bg-violet-950 text-primary-content peer-checked:text-secondary-content">
          {children}
        </div>
      </div>
    </section>
  );
}

export default Accordion;
