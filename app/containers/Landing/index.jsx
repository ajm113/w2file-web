import { h, Fragment } from 'preact';
import { Link } from 'preact-router/match';

const Landing = () => (
  <Fragment>
    <section className="hero is-success is-medium">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Start sending W2 and 1099's to NEW employees!
          </h1>
          <h2 className="subtitle">
            Send easy to use forms via email and SMS and get a ready to use PDF for the IRS!
          </h2>
        </div>
      </div>
    </section>
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Why Us?
          </h1>
          <h2 className="subtitle">
            Flexible, secure and easy to use and price plans for everybody!
          </h2>
          <div className="columns">
            <div className="column">
              <h2 className="title">Easy</h2>
              <p>We make it easy for everybody! Pros and people who may not even know what a "tax withholding" is! People can use our Wizard or fill out the form all in one page if the employee knows their stuff!</p>
            </div>
            <div className="column">
              <h2 className="title">Secure</h2>
              <p>Everything is encrypted and we follow the latest practices and standards to protect everyone's data.</p>
            </div>
            <div className="column">
              <h2 className="title">Flexible</h2>
              <p>We make it flexible for everyone! Just a small business? No problem we have great pricing! Mid to enterprise? We have monthy plans and features to make everyone happy!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Features
          </h1>
          <h2 className="subtitle">
            We offer many features! Export W2 and 1099 to PDF and Word, Notifications, API Callpoint.
          </h2>
          <div className="columns">
            <div className="column">
              <h2 className="title">Exporting</h2>
              <p>Have PDFs/Word documents downloaded or sent via email.</p>
            </div>
            <div className="column">
              <h2 className="title">Wizard</h2>
              <p>Not everyone knows how these forms work! We offer easy walkthrough for each line on W2 or 1099 with tips and calculators!</p>
            </div>
            <div className="column">
              <h2 className="title">API Access Point</h2>
              <p>We offer API access point to send documents or retrive documents that will work for your needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="hero is-medium">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Like what you see?
          </h1>
          <div className="has-text-centered">
            <Link href="/signup" className="button is-success is-large has-text-weight-bold">Get Started Today!</Link>
          </div>
        </div>
      </div>
    </section>
  </Fragment>
);


export default Landing;
