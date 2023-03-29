import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";

interface Store {
  //ActivityStore is a class, and classes can be used as type
  activityStore: ActivityStore;
}

export const store: Store = {
  activityStore: new ActivityStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
