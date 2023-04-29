import { NavLink } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  const categroyList = [
    {
      type: "Home",
      to: "/",
    },
    {
      type: "Technology",
      to: "/technology",
    },
    {
      type: "Life",
      to: "/life",
    },
    {
      type: "Business",
      to: "/business",
    },
    {
      type: "Sports",
      to: "/sports",
    },
    {
      type: "Politics",
      to: "/politics",
    },
    {
      type: "Health",
      to: "/Health",
    },
    {
      type: "Entertainment",
      to: "/entertainment",
    },
  ];

  return (
    <header>
      <>
        <nav className="nav d-f ai-c jc-sb">
          <h1>.toDay News</h1>
          <div className="nav__search d-f ai-c">
            <Search />
            <div className="nav__search__login d-f ai-c">
              <NavLink to="#">Sign in</NavLink>
              <NavLink to="#">Sign Up</NavLink>
            </div>
          </div>
        </nav>
        <div className="category d-f ai-c jc-sb">
          {categroyList.map((value, index) => {
            return (
              <NavLink
                className="category__link"
                activeclassname="active"
                key={index}
                to={value.to}
              >
                {value.type}
              </NavLink>
            );
          })}
        </div>
      </>
    </header>
  );
};

export default Header;
