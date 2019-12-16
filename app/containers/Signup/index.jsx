import { h, Fragment } from 'preact';
import { Link } from 'preact-router/match';

const Signup = () => (
  <Fragment>
    <section className="hero is-success">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Sign Up Today!
          </h1>
          <h2 className="subtitle">
            Let's ask some simple questions first. Then let's begin!
          </h2>
        </div>
      </div>
    </section>
    <section className="hero">
      <div className="hero-body">
        <div className="container">
        <h1 className="title">
            1. Select Price Plan
          </h1>
        </div>
      </div>
    </section>
  </Fragment>
);


export default Signup;
