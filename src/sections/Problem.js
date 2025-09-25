import Logo from '../Problem.jfif';

export default function Problem() {
  return (
    <section id="problem" className="content-section">
      <article className="content-article">
        <div className="content-text">
          <h2 className="text-3xl font-semibold mb-2">Problem</h2>
          <p className="text-gray-600">
            As mentioned previously, social media can be beneficial to individuals. However, recently, the design choices are mainly driven by statistics and engagements rather than a human’s mental wellness. These decisions are made to be addictive and utilizes algorithms to personalize and encourage the overconsumption of these social media. The impact of this excessive use of these online platforms are harmful for anyone’s mental health and productivity.
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