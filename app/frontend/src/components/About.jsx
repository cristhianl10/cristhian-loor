export const About = ({ data }) => (
  <section className="about section" id="perfil">
    <div className="shell split">
      <p className="section-id">perfil.ts</p>
      <div>
        <h2>{data.title}</h2>
        <p className="lead">{data.text}</p>
      </div>
    </div>
  </section>
);
