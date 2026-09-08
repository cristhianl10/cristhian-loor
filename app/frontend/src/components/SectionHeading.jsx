function SectionHeading({ id, etiqueta, titulo, descripcion }) {
  return <header className="encabezado-seccion">{etiqueta && <span className="mono encabezado-etiqueta">{etiqueta}</span>}<h2 id={id}>{titulo}</h2>{descripcion && <p>{descripcion}</p>}</header>;
}

export default SectionHeading;
