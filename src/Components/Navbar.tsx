export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ background: "cornflowerblue" }}
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Create Post
              </a>
            </li>
            <li className="nav-item">
              <a href="/read" className="nav-link">
                All Post
              </a>
            </li>
          </ul>
        </div>

        <input
          className="form-control "
          type="search"
          placeholder="Search"
        ></input>
      </div>
    </nav>
  );
};
