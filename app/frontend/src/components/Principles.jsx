export const Principles = ({ data }) => (
  <section className="education section" aria-labelledby="formacion-title">
    <div className="shell education-grid">
      <div><p className="section-id">formacion.json</p><h2 id="formacion-title">{data.degree}</h2><p>{data.institution}<br />{data.period}</p></div>
      <div className="achievement"><span>Reconocimiento</span><strong>{data.recognition}</strong></div>
      <div className="languages"><span>Idiomas</span><strong>{data.languages}</strong></div>
    </div>
  </section>
);
