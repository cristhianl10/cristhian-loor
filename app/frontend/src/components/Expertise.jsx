export const Expertise = ({ data }) => (
  <section className="stack section" id="stack">
    <div className="shell">
      <div className="section-head"><p className="section-id">stack.config</p><h2>Stack técnico</h2></div>
      <div className="stack-table">
        {data.map((group, index) => (
          <article key={group.area}>
            <span className="stack-index">[{String(index).padStart(2, '0')}]</span>
            <h3>{group.area}</h3>
            <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);
