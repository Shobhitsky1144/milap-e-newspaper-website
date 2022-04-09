import { LOAD_PDF } from "../Constants";
const initialState = {
  loadData: [],
};
export default function loadItems(state = initialState, action) {
  switch (action.type) {
    case LOAD_PDF:
      return {
        ...state,
        loadData: action.data,
      };
      break;
    default:
      return state;
  }
}
