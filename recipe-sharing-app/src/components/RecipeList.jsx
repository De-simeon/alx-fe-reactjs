import { useRecipeStore } from '../recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      {recipes.length === 0 && <p>No recipes yet. Add one!</p>}

      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;