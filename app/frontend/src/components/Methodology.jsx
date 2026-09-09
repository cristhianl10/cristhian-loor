import { useRef } from 'react';

function Methodology({ contenido }) {
  const { metodologia, presentacion } = contenido;
  const visualRef = useRef(null);

  const inclinar = (evento) => {
    const nodo = visualRef.current;
    if (!nodo || window.matchMedia('(pointer: coarse)').matches) return;
    const rect = nodo.getBoundingClientRect();
    const px = ((evento.clientX - rect.left) / rect.width - 0.5) * 2;
    const py = ((evento.clientY - rect.top) / rect.height - 0.5) * 2;
    nodo.style.setProperty('--ix', `${px}`);
    nodo.style.setProperty('--iy', `${py}`);
  };

  const enRatonFuera = () => {
    const nodo = visualRef.current;
    if (!nodo) return;
    nodo.style.setProperty('--ix', '0');
    nodo.style.setProperty('--iy', '0');
  };

  return (
    <section className="metodologia" id="metodologia" aria-labelledby="titulo-metodologia">
      <span className="mono">{metodologia.etiqueta}</span>
      <h2 id="titulo-metodologia">{metodologia.titulo}</h2>
      <div className="metodologia-reticula">
        <ol className="metodologia-pasos" data-reveal="flow">
          {metodologia.pasos.map((paso) => (
            <li key={paso.numero}>
              <span className="paso-numero" aria-hidden="true">{paso.numero}</span>
              <div><h3>{paso.titulo}</h3><p>{paso.texto}</p></div>
            </li>
          ))}
        </ol>
        <div className="metodologia-visual" ref={visualRef} onPointerMove={inclinar} onPointerLeave={enRatonFuera} data-reveal="panel">
          <div className="metodologia-visual-inner">
            <div className="pila-capas" aria-label={presentacion.panel.titulo}>
              {presentacion.capasVisual.map((capa, indice) => (
                <div className="pila-pila" key={capa}>
                  <span aria-hidden="true">0{indice + 1}</span>
                  <strong>{capa}</strong>
                  <i aria-hidden="true" />
                </div>
              ))}
            </div>
            <div className="metodologia-tarjeta" data-foco>
              <span className="mono">{metodologia.panel.titulo}</span>
              <strong>{metodologia.panel.nucleo}</strong>
              <p>{metodologia.panel.descripcion}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Methodology;
