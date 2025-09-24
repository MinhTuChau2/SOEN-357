import Logo from '../logoforminiproject.png';

export default function Conclusion() {
  return (
    <section id="conclusion" className="content-section">
        <article className="content-article">
        <div className="content-text">
          <h2 className="text-3xl font-semibold mb-2">Conclusion</h2>
            <p className="text-gray-600">
            In conclusion, our project highlights the importance of thoughtful design in enhancing user experience and engagement.
            By addressing user needs through research, visual design, and iterative improvements, we have created a solution that is both functional and aesthetically pleasing.
            </p>
            </div>
        <img
            src={Logo}
            alt="Conclusion visual"
            className="content-image"
        />
        </article>
    </section>
  );
}