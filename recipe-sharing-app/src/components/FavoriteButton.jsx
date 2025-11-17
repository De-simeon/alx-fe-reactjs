// src/components/FavoriteButton.jsx
import useRecipeStore from '../store/recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  return (
    <button
      onClick={() => {
        if (isFavorite) removeFavorite(recipeId);
        else addFavorite(recipeId);
      }}
    >
      {isFavorite ? "Unfavorite" : "Favorite"}
    </button>
  );
};

export default FavoriteButton;