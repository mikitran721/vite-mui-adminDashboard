import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <div className="title">{item.title}</div>
          {item.listItems.map((listItem) => (
            <Link key={listItem.id} className="listItem" to="/">
              <img src={listItem.icon} alt={listItem.icon} />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
