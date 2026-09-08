function SectionHeading({ id, titulo, descripcion }) {
  return <header className="encabezado-seccion"><h2 id={id}>{titulo}</h2>{descripcion && <p>{descripcion}</p>}</header>;
}

export default SectionHeading;
