import Logo from '../logoforminiproject.png';

export default function Solution() {
  return (
    <section id="solution" className="content-section">
      <article className="content-article">
        <div className="content-text">
          <h2 className="text-3xl font-semibold mb-2">Solution</h2>
          <p className="text-gray-600">
            Overly complex layouts can overwhelm users. A simple, well-structured
          design allows the content to shine.
          </p>
        </div>
        <img
          src={Logo}
            alt="Solution visual"
            className="content-image"
            />
        </article>
    </section>
    );
}