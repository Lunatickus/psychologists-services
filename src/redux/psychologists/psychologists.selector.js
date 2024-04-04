export const selectPsychologistsItems = (state) => state.psychologists.items;

export const selectPsychologistsIsLoading = (state) =>
  state.psychologists.isLoading;

export const selectPsychologistsError = (state) => state.psychologists.error;

export const selectFavoritesItems = (state) => state.favorites.items;