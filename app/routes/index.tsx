import { LoaderFunction, useLoaderData } from 'remix';
import { getRandomDrink, Drink } from '~/api/coctails';
import RandomDrink from '~/components/RandomDrink';

export const loader: LoaderFunction = async () => {
  return getRandomDrink();
};

export default function Index() {
  return <RandomDrink />;
}
