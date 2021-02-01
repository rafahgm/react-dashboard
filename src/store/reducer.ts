import { DrawerState, DrawerActionTypes, TOGGLE_DRAWER } from "./types";

const initialDrawerState: DrawerState = {
  open: false,
};

export default function drawerReducer(
  state = initialDrawerState,
  action: DrawerActionTypes
): DrawerState {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return {
        open: action.payload,
      };
    default:
      return state;
  }
}
