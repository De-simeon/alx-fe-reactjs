import { useState } from 'react';
import { useRecipeStore } from '../recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((s) => s.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    addRecipe({
      id: Date.now().toString(),
      title,
      description,
    });

    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={4}
        style={{ width: '100%', marginTop: 8 }}
      />
      <br />
      <button type="submit" style={{ marginTop: 8 }}>
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;