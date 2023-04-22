const recipeForm = document.getElementById('recipe-form');

recipeForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const title = recipeForm.elements['recipe-title'].value;
  const description = recipeForm.elements['recipe-description'].value;
  const ingredients = recipeForm.elements['recipe-ingredients'].value.split('\n');
  const instructions = recipeForm.elements['recipe-instructions'].value.split('\n');

  // Save the recipe to Firebase
  await db.collection('recipes').add({
    title,
    description,
    ingredients,
    instructions,
  });

  // Clear the form
  recipeForm.reset();
});
const recipeList = document.getElementById('recipe-list');

// Query the recipes collection in Firebase
const querySnapshot = await db.collection('recipes').get();

// Generate HTML elements for each recipe
querySnapshot.forEach((doc) => {
  const recipe = doc.data();

  const recipeCard = document.createElement('div');
  recipeCard.classList.add('recipe-card');

  const recipeTitle = document.createElement('h2');
  recipeTitle.textContent = recipe.title;

  const recipeDescription = document.createElement('p');
  recipeDescription.textContent = recipe.description;

  const recipeIngredients = document.createElement('ul');
  recipe.ingredients.forEach((ingredient) => {
    const ingredientItem = document.createElement('li');
    ingredientItem.textContent = ingredient;
    recipeIngredients.appendChild(ingredientItem);
  });

  const recipeInstructions = document.createElement('ol');
  recipe.instructions.forEach((instruction) => {
    const instructionItem = document.createElement('li');
    instructionItem.textContent = instruction;
    recipeInstructions.appendChild(instructionItem);
  });

  recipeCard.appendChild(recipeTitle);
  recipeCard.appendChild(recipeDescription);
  recipeCard.appendChild(recipeIngredients);
  recipeCard.appendChild(recipeInstructions);

  recipeList.appendChild(recipeCard);
});
