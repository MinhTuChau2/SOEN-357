import Logo from '../solution.jfif';

export default function Solution() {
  return (
    <section id="solution" className="content-section">
      <article className="content-article">
        <div className="content-text">
          <h2 className="text-3xl font-semibold mb-2">Solution</h2>
          <p className="text-gray-600">
            Our team aims to design an app focused more on the well-being of a user while keeping all the beneficial elements of a social media platform. We want to counter the harmful effects of overconsumption caused by addictive designs and algorithms. Instead of promoting endless scrolling and mindless consumption, the app will have an integrated tool that encourages mindful usage. In fact, gamifying the usage of an app could be beneficial. Time tracking, break reminders and study modes could all be linked to a point system that could reward a user. Also, instead of algorithms that could be detrimental for a user, a curated one would highlight positive and reliable information. The UI will avoid features like intrusive notifications and addictive video auto-play. The app aims to form a community that will support each other and make connections without the pressure of toxicity, therefore blocking all kinds of inappropriate behaviours and having moderators.
In conclusion, all these changes are there to fight off the dark patterns invented to keep a user hooked, and eventually damage their mental health.

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