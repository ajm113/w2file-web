import { h } from 'preact';
import { Link } from 'preact-router/match';

const Header = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item" href="/">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
      </Link>

      <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <Link activeClassName="is-active" className="navbar-item" href="/">
          Home
        </Link>

        <Link activeClassName="is-active" className="navbar-item" href="/about">
          About
        </Link>

        <Link activeClassName="is-active" className="navbar-item" href="/help">
          Help / Support
        </Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link className="button is-primary" href="/signup">
              <strong>Start Sending W2s and 1099s!</strong>
            </Link>
            <Link className="button is-light" href="/login">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
