import Logo from '../logoforminiproject.png';

export default function Personas() {
  return (
    <section id="Personas" className="personas">
        <article className="content-article">
        <div className="content-text">
          <h2 className="text-3xl font-semibold mb-2">Personas</h2>
          <p className="text-gray-600">
           These are the personas
            </p>
            </div>
        <img
            src={Logo}
            alt="Visual Design visual"
            className="content-image"
        />
      </article>
    </section>
  );
}