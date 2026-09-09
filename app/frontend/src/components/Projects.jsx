import SectionHeading from './SectionHeading';
import ProjectCarousel from './ProjectCarousel';
function Projects({ contenido }) {
  const { seccionProyectos, proyectos, interfaz } = contenido;
  return (
    <section className="seccion proyectos" id="proyectos" aria-labelledby="titulo-proyectos">
      <SectionHeading id="titulo-proyectos" etiqueta={seccionProyectos.etiqueta} titulo={seccionProyectos.titulo} descripcion={seccionProyectos.descripcion} />
      <ProjectCarousel proyectos={proyectos} interfaz={interfaz} />
    </section>
  );
}

export default Projects;
