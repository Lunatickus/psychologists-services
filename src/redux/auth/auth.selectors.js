export const selectUser = state => state.auth.user;

export const selectUserName = state => state.auth.user.name;

export const selectUserEmail = state => state.auth.user.email;

export const selectUserIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUserIsLoading = state => state.auth.isLoading;

export const selectUserError = state => state.auth.error;