export type Drink = {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass?: string;
  strInstructions: string;
  strDrinkThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strIngredient9?: string;
  strIngredient10?: string;
  strIngredient11?: string;
  strIngredient12?: string;
  strIngredient13?: string;
  strIngredient14?: string;
  strIngredient15?: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3?: string;
  strMeasure4?: string;
  strMeasure5?: string;
  strMeasure6?: string;
  strMeasure7?: string;
  strMeasure8?: string;
  strMeasure9?: string;
  strMeasure10?: string;
  strMeasure11?: string;
  strMeasure12?: string;
  strMeasure13?: string;
  strMeasure14?: string;
  strMeasure15?: string;
};
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

export async function getRandomDrink() {
  const response = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/random.php'
  );
  console.log(response);

  const data = await response.json();
  const drink: Drink = data.drinks[0];
  return drink;
}

export async function getDrinksByLetter(letter: string) {
  console.log('Letter: ', letter);

  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
  );
  const data = await response.json();
  const drinks: Drink[] = data.drinks;

  return drinks;
}

export async function getDrinkById(drinkId: string) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
  );
  const data = await response.json();
  const drink: Drink = data.drinks[0];
  return drink;
}
export async function getDrinksByName(strDrink: string) {
  console.log('drinks name: ', strDrink);
  console.log(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${strDrink}`);
  const response = await fetch(
    `www.thecocktaildb.com/api/json/v1/1/search.php?s=${strDrink}`
  );
  console.log('Response: ', response);

  const data = await response.json();
  console.log(data);
  const drinks: Drink[] = data.drinks;

  return drinks;
}
