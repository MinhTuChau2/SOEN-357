import Logo from '../logoforminiproject.png';

export default function Introduction() {
  return (
    <section id="introduction" className="content-section">
      <article className="content-article">
        <div className="content-text">
          <h2 className="text-3xl font-semibold mb-2">Introduction</h2>
          <p className="text-gray-600">
            In our age, social media has become an unavoidable tool used for connectivity,
            and entertainment for people. However, its ease of access causes important social
            and technical issues. In fact, the goals of a good UX design rely more on numbers and traction than the users
            well-being. The addictive features like endless scrolling, auto-playing, and other
            techniques that makes it hard to leave. Advanced algorithms worsen the
            problem by creating personalized feeds that lead to overconsumption. This causes
            misinformation and emotional distress to spread rapidly. For students, their attention span and their productivity are decreasing every year.
            Also, the constant notifications and nagging pressures students to 
            multitask and cause more mental damages. Furthermore, this excessive use of social media can lead to
            severe anxiety, depression, and social
            comparisons that ultimately harm mental health. These issues are primary examples 
            that shows the analysis of the relationship between social media and mental health is an important discussion topic.
          </p>
        </div>
        <img
          src={Logo}
          alt="Introduction visual"
          className="content-image"
        />
      </article>
    </section>
  );
}