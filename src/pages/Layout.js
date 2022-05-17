import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <span className="sr-only">(current)</span>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/singin">
              Singin
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/transaction">
              My page
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/message">
              Message
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
