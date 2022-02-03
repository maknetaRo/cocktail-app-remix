import { LoaderFunction, useLoaderData } from 'remix';
import invariant from 'tiny-invariant';
import { getDrinkById, Drink } from '~/api/coctails';

export const Loader: LoaderFunction = async ({ params }) => {
  invariant(params.drinkId, 'expected params.drinkId');
  const drink = await getDrinkById(params.drinkId);

  return drink;
};

export default function DrinkById() {
  const drink = useLoaderData<Drink>();
  console.log(drink);
  return <div>I am a drink</div>;
}
