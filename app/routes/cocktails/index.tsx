import {
  Form,
  LoaderFunction,
  useLoaderData,
  Outlet,
  json,
  redirect,
} from 'remix';
import { getDrinksByName, Drink, getDrinkById } from '~/api/coctails';

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);

  const search = url.searchParams.get('q');
  if (!search) return null;
  const data = getDrinksByName(search);

  return { data };
};

export default function IndexCocktailRoute() {
  const drinks = useLoaderData<Drink[]>();

  return (
    <div>
      <Form reloadDocument method="get" action="/cocktails">
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
