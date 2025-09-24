import Logo from '../logoforminiproject.png';

export default function Analysis() {
  return (
    <section id="analysis" className="content-section">
        <article className="content-article">
        <div className="content-text">
          <h2 className="text-3xl font-semibold mb-2">Analysis</h2>
          <p className="text-gray-600">
            The analysis of social media's impact on mental health reveals a complex relationship.
            </p>
            </div>
        <img
          src={Logo}
          alt="Analysis visual"
          className="content-image"
        />
      </article>
    </section>
  );
}