import { h, Fragment } from 'preact';
import { Link } from 'preact-router/match';

const Help = () => (
  <Fragment>
    <section className="hero is-warning">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Help
          </h1>
          <h2 className="subtitle">
            Have questions? We have answers!
          </h2>
        </div>
      </div>
    </section>
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h2 className="title">Email Us</h2>
              <div className="content">
                <p>Responses are usually 1 to 2 business days.</p>
                <p>Email: <a href="mailto:support@website.com">support@website.com</a></p>
              </div>
            </div>
            <div className="column">
              <h2 className="title">Call Us</h2>
              <div className="content">
              <p>Open Monday through Friday 9 AM to 5 PM (Mountain Time).</p>
              <p>Toll Free: <a href="tel:18005555555">1 (800) 555 5555</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Fragment>
);


export default Help;
