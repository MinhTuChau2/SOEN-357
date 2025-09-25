import Logo from '../research.png';

export default function Research() {
  return (
    <section id="research" className="content-section">
      <article className="content-article">
      <div className="content-text-group">
        <div className="content-text">
          <h2 >Research</h2>
          <p >Reach out to us anytime...</p>
        </div>
      <div className="content-text2">
          <h2 className="user-research-heading">User Research</h2>
          <p>Reach out to us anytime...</p>
          </div>
          <div className="content-text2">
          <h2 className="user-research-heading">User Quotes</h2>
          <p>Reach out to us anytime...</p>
          </div>
          <div className="content-text2">
          <h2 className="user-research-heading">User Goals</h2>
          <p>Reach out to us anytime...</p>
          </div>
          <div className="content-text2">
          <h2 className="user-research-heading">User's Frustrations</h2>
          <p>Reach out to us anytime...</p>
          </div>
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