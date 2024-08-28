import "./style.css";
import ModrenHamburgerMenu from "../ModrenHamburger";

const HorizontalMenu = () => {
  return (
    <nav className="horizontal-menu">
      <ModrenHamburgerMenu />
      <div className="items">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
};

export default HorizontalMenu;
