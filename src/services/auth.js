/* eslint-disable no-useless-catch */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";

export const registerDB = async ({ email, password }) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw error;
  }
};

export const authStateChanged = async (onChange) => {
  onAuthStateChanged(auth, (user) => {
    onChange(user);
  });
};

export const loginDB = async ({ email, password }) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    return credentials.user;
  } catch (error) {
    throw error;
  }
};

export const updateUserProfile = async (update) => {
  const user = auth.currentUser;

  if (user) {
    try {
      await updateProfile(user, update);
    } catch (error) {
      throw error;
    }
  }
};

export const logOutDb = async () => {
  auth.signOut();
};

export const getCurrentUser = async () => {
  const user = auth.currentUser;

  if (user) {
    const displayName = user.displayName;
    const email = user.email;
    return { displayName, email };
  }

  return;
};
