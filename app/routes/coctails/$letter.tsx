import { Link, LoaderFunction, useLoaderData, Outlet } from 'remix';
import { getDrinksByLetter, Drink } from '~/api/coctails';
import invariant from 'tiny-invariant';

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.letter, 'expected params.letter');
  const drinks = await getDrinksByLetter(params.letter);

  return drinks;
};

export default function CocktailsLetter() {
  const drinks = useLoaderData<Drink[]>();
  console.log(drinks);
  return (
    <>
      <div className="container-page">
        <div className="cocktail-list">
          {drinks.map((drink) => (
            <Link
              to={drink.idDrink}
              key={drink.idDrink}
              title={drink.strDrink}
              prefetch="intent"
            >
              <div className="cocktail">
                <h2>{drink.strDrink}</h2>
                <img src={drink.strDrinkThumb} alt={drink.strDrink} />
              </div>
            </Link>
          ))}
        </div>
        <Outlet />
      </div>
    </>
  );
}
