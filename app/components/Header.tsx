import { NavLink } from 'remix';
import SearchForm from './SearchForm';

export default function Header() {
  return (
    <header className="header">
      <h1 className="title">Cocktail Recipes</h1>

      {/* <SearchForm /> */}

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
