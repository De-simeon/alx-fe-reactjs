import { useState } from 'react';
import { useRecipeStore } from '../recipeStore';
import { useNavigate } from 'react-router-dom';

const EditRecipeForm = ({ recipe, onDone }) => {
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    updateRecipe(recipe.id, { title, description });
    if (onDone) onDone();
    // Optionally navigate back to details (keeps you on details with updated data)
    // navigate(`/recipes/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <br />
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div style={{ marginTop: 8 }}>
        <label>Description</label>
        <br />
        <textarea
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: '100%' }}
        />
      </div>

      <div style={{ marginTop: 8 }}>
        <button type="submit">Save</button>
        <button
          type="button"
          onClick={() => {
            if (onDone) onDone();
            else navigate(-1);
          }}
          style={{ marginLeft: 8 }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditRecipeForm;