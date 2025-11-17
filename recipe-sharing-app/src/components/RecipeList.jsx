import { Link } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((s) => s.recipes);

  return (
    <div>
      {recipes.length === 0 && <p>No recipes yet. Add one!</p>}

      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: 12 }}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;