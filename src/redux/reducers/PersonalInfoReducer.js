import { TAKE_PERSONAL_INFO } from "../constants/action_types";
const intialState = {
  personal_data: [],
};

export default function (state = intialState, action) {
  switch (action.type) {
    case TAKE_PERSONAL_INFO:
      return {
        ...state,
        personal_data: action.payload,
      };
      default: 
      return state
  }
}
