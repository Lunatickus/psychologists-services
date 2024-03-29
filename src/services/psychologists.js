import { get, orderByChild, query, ref } from "firebase/database";
import { db } from "./firebase";

export const getDataFromFirestore = async () => {
  try {
    const dbRef = ref(db, 'psychologists');
    
    // const snapshots = await get(dbRef);
    const ordered = query(dbRef, orderByChild("name"));
    const snapshots = await get(ordered);
    console.log(snapshots.val())
    return snapshots.val();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
