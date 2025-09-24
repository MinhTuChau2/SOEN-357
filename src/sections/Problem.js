import Logo from '../logoforminiproject.png';

export default function Problem() {
  return (
    <section id="problem" className="content-section">
      <article className="content-article">
        <div className="content-text">
          <h2 className="text-3xl font-semibold mb-2">Problem</h2>
          <p className="text-gray-600">
            The user interfaces that promotes endless scrolling leads to the loss
          of focus and self-control caused by long-term usage, and the emotional
          consequences caused by interacting with triggering or negative
          content.
          </p>
        </div>
        <img
            src={Logo}
            alt="Problem visual"
            className="content-image"
            />
        </article>
    </section>
    );
}