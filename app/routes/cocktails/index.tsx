import { Form, LoaderFunction, useLoaderData, Outlet } from 'remix';
import { getDrinksByName, Drink } from '~/api/coctails';

export const loader: LoaderFunction = async ({ request }) => {
  console.log(request);
  const url = new URL(request.url);
  const strDrink = url.searchParams.get('q');
  if (!strDrink) return null;
  console.log('Nazwa drinka: ', strDrink);
  return getDrinksByName(strDrink);
};

export default function IndexCocktailRoute() {
  const drinks = useLoaderData<Drink[]>();
  console.log('All drinks: ', drinks);
  return (
    <div>
      <Form reloadDocument method="get">
        <label htmlFor="search">Search </label>
        <input type="text" id="search" name="q" />
        <button type="submit">Search</button>
      </Form>
      <Outlet />
      {/* <div className="container-page">
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
      </div> */}
    </div>
  );
}
