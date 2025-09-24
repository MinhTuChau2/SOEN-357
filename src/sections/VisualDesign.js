import Logo from '../logoforminiproject.png';

export default function VisualDesign() {
  return (
    <section id="visual-design" className="content-section">
        <article className="content-article">
        <div className="content-text">
          <h2 className="text-3xl font-semibold mb-2">Visual Design</h2>
          <p className="text-gray-600">
            A clean and minimalistic visual design enhances user experience by reducing cognitive load and allowing users to focus on essential content.
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