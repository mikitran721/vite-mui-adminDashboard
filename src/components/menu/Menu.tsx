import { Link } from "react-router-dom";
import "./menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      <div className="item">
        <div className="title">MAIN</div>
        <Link to="/">
          <img src="/home.svg" alt="home" />
          <span className="listItemTitle">Home</span>
        </Link>
        <Link to="/">
          <img src="/profile.svg" alt="home" />
          <span className="listItemTitle">Profile</span>
        </Link>
      </div>

      <div className="item">
        <div className="title">MAIN</div>
        <Link to="/">
          <img src="/home.svg" alt="home" />
          <span className="listItemTitle">Home</span>
        </Link>
        <Link to="/">
          <img src="/profile.svg" alt="home" />
          <span className="listItemTitle">Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
