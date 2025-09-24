import Logo from '../logoforminiproject.png';

export default function FinalDesign() {
  return (
    <section id="finaldesign" className="content-section">
        <article className="content-article">
        <div className="content-text">
          <h2 className="text-3xl font-semibold mb-2">Final Design</h2>
          <p className="text-gray-600">
            The final design integrates user feedback and best practices to create an intuitive and engaging experience.
            </p>
            </div>
        <img
            src={Logo}
            alt="Final Design visual"
            className="content-image"
        />
      </article>
    </section>
  );
}