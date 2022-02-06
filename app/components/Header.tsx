import { NavLink } from 'remix';

export default function Header() {
  return (
    <header className="header">
      <h1 className="title">Cocktail Recipes</h1>

      <ul>
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Random Recipe
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/cocktails">
            Cocktails
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li> */}
      </ul>
    </header>
  );
}
