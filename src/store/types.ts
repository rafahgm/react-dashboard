export interface DrawerState {
  open: boolean;
}

export const TOGGLE_DRAWER = "@drawer/TOGGLE";

interface ToggleDrawer {
  type: typeof TOGGLE_DRAWER;
  payload: boolean;
}

export type DrawerActionTypes = ToggleDrawer;
