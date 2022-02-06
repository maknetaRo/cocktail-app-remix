import { LoaderFunction, useLoaderData } from 'remix';
import invariant from 'tiny-invariant';
import { getDrinkById, Drink } from '~/api/coctails';

export const loader: LoaderFunction = async ({ params }) => {
  console.log(params);
  invariant(params.cocktail, 'expected params.cocktail');
  const drink = await getDrinkById(params.cocktail);

  return drink;
};

export default function DrinkById() {
  const drink = useLoaderData<Drink>();
  console.log(drink);
  return (
    <div className="random-cocktail">
      <h2>{drink.strDrink}</h2>
      <div className="random-card">
        <div className="column column-pic">
          <img src={drink.strDrinkThumb} alt="title" />
        </div>
        <div className="column column-text">
          <div className="row">
            <h4>
              Category: <span>{drink.strCategory}</span>
            </h4>
            <h4>
              Alcoholic: <span>{drink.strAlcoholic}</span>
            </h4>
          </div>
          <div>
            <h4>Ingredients: </h4>
            <ul className="ingredient-list">
              <li className="ingredient-elem">
                {drink.strMeasure1} {drink.strIngredient1}
              </li>
              <li className="ingredient-elem">
                {drink.strMeasure2} {drink.strIngredient2}
              </li>
              <li className="ingredient-elem">
                {drink.strMeasure3} {drink.strIngredient3}
              </li>
              <li className="ingredient-elem">
                {drink.strMeasure4} {drink.strIngredient4}
              </li>
            </ul>
          </div>

          <p>{drink.strInstructions}</p>
        </div>
      </div>
    </div>
  );
}
