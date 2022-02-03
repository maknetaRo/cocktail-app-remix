import { NavLink } from 'remix';

export default function AlphabetList() {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <div className="letters-row">
      <ul className="letters-list">
        {letters.map((letter) => (
          <li>
            <NavLink to={'/coctails/' + letter} className="letter" key={letter}>
              {letter}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
