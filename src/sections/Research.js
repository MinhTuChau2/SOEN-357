import Logo from '../logoforminiproject.png';

export default function Research() {
  return (
    <section id="research" className="content-section">
      <article className="content-article">
        <div className="content-text">
          <h2 className="text-3xl font-semibold mb-2">Research</h2>
          <p className="text-gray-600">
            Reach out to us anytime — we love hearing from readers and collaborators.
          </p>
        </div>
        <img
            src={Logo}
            alt="Research visual"
            className="content-image"
            />
        </article>
    </section>
    );
}