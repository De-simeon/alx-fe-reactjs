import { useRecipeStore } from '../recipeStore';

const DeleteRecipeButton = ({ recipeId, afterDelete }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);

  const handleDelete = () => {
    // confirm UX — minimal but necessary
    if (!window.confirm('Delete this recipe?')) return;
    deleteRecipe(recipeId);
    if (afterDelete) afterDelete();
  };

  return (
    <button onClick={handleDelete} style={{ background: 'transparent' }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;