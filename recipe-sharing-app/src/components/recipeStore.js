import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  setSearchTerm: (term) => set({ searchTerm: term }),

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.recipes, newRecipe], // keeps filtered list in sync
    })),

  updateRecipe: (id, updates) =>
    set((state) => {
      const updated = state.recipes.map((r) =>
        r.id === id ? { ...r, ...updates } : r
      );
      return {
        recipes: updated,
        filteredRecipes: updated,
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const filtered = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: filtered,
        filteredRecipes: filtered,
      };
    }),
}));