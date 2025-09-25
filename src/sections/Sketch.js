import Logo from '../logoforminiproject.png';

export default function Sketch() {
  return (
    <section id="sketch" className="sketch">
        <article className="content-article">
        <div className="content-text">
          <h2 className="text-3xl font-semibold mb-2">Sketch & Wireframe</h2>
          <p className="text-gray-600">
           Here are our sketches and Wireframe
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