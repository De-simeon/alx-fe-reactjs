import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useState } from 'react';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back to list</Link>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => navigate(-1)} style={{ marginBottom: 8 }}>
        ← Back
      </button>

      {!editing ? (
        <>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>

          <div style={{ marginTop: 12 }}>
            <button onClick={() => setEditing(true)} style={{ marginRight: 8 }}>
              Edit
            </button>

            <DeleteRecipeButton recipeId={recipe.id} afterDelete={() => navigate('/')} />
          </div>
        </>
      ) : (
        <EditRecipeForm recipe={recipe} onDone={() => setEditing(false)} />
      )}
    </div>
  );
};

export default RecipeDetails;