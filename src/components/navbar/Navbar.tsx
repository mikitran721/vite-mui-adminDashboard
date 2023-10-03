import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="Logo" />
        <span>mikiadmin</span>
      </div>
      <div className="icons">
        <img className="icon" src="/search.svg" alt="search" />
        <img className="icon" src="/app.svg" alt="app" />
        <img className="icon" src="/expand.svg" alt="expand" />
        <img className="icon" src="" alt="" />
        <div className="notification">
          <img src="/notifications.svg" alt="notification" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://mikitran-portfolio-2023.vercel.app/_next/image?url=%2Fimages%2Fmiki-cool.png&w=384&q=75"
            alt="user"
          />
          <span>Miki</span>
        </div>
        <img className="icon" src="settings.svg" alt="setting" />
      </div>
    </div>
  );
};

export default Navbar;
