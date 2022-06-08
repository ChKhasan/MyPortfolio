import { TAKE_MESSAGES_DATA } from "../constants/action_types";

const intialState = {
  message_data: [],
};

export default function (state = intialState, action) {
  switch (action.type) {
    case TAKE_MESSAGES_DATA:
      return {
        ...state,
        message_data: action.payload,
      };
    default:
      return state;
  }
}
