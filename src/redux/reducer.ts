import { GET_DATA } from "./types";
import { sliceDataToThreeElements } from "./utils";

const INITIAL_STATE = {
  data: [],
};

const checkboxesReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: sliceDataToThreeElements(action.payload),
      };
    default:
      return {
        ...state,
      };
  }
};

export { checkboxesReducer };
