import { DrawerActionTypes, TOGGLE_DRAWER } from "./types";

export function toggleDrawer(open: boolean): DrawerActionTypes {
  return {
    type: TOGGLE_DRAWER,
    payload: open,
  };
}
