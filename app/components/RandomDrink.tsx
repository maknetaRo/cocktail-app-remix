import { LoaderFunction, useLoaderData } from 'remix';
import { getRandomDrink, Drink } from '~/api/coctails';

export const loader: LoaderFunction = async () => {
  return getRandomDrink();
};

export default function RandomDrink() {
  const randomDrink = useLoaderData<Drink>();

  return (
    <div className="random-cocktail">
      <h2>Random Cocktail Recipe</h2>
      <div className="random-card">
        <div className="column column-pic">
          <img src={randomDrink.strDrinkThumb} alt="title" />
        </div>
        <div className="column column-text">
          <h3 className="cocktail-name">{randomDrink.strDrink}</h3>
          <div className="row">
            <h4>
              Category: <span>{randomDrink.strCategory}</span>
            </h4>
            <h4>
              Alcoholic: <span>{randomDrink.strAlcoholic}</span>
            </h4>
          </div>
          <div>
            <h4>Ingredients: </h4>
            <ul className="ingredient-list">
              <li className="ingredient-elem">
                {randomDrink.strMeasure1} {randomDrink.strIngredient1}
              </li>
              <li className="ingredient-elem">
                {randomDrink.strMeasure2} {randomDrink.strIngredient2}
              </li>
              <li className="ingredient-elem">
                {randomDrink.strMeasure3} {randomDrink.strIngredient3}
              </li>
              <li className="ingredient-elem">
                {randomDrink.strMeasure4} {randomDrink.strIngredient4}
              </li>
            </ul>
          </div>

          <p>{randomDrink.strInstructions}</p>
        </div>
      </div>
    </div>
  );
}
